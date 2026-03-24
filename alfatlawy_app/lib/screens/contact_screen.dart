import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';
import '../utils/app_theme.dart';

class ContactScreen extends StatefulWidget {
  const ContactScreen({super.key});

  @override
  State<ContactScreen> createState() => _ContactScreenState();
}

class _ContactScreenState extends State<ContactScreen> {
  final _formKey = GlobalKey<FormState>();
  final _nameCtrl = TextEditingController();
  final _emailCtrl = TextEditingController();
  final _subjectCtrl = TextEditingController();
  final _messageCtrl = TextEditingController();

  @override
  void dispose() {
    _nameCtrl.dispose();
    _emailCtrl.dispose();
    _subjectCtrl.dispose();
    _messageCtrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'تواصل معنا',
          style: GoogleFonts.tajawal(fontWeight: FontWeight.w800),
        ),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(16, 12, 16, 40),
        child: Column(
          children: [
            // ── Contact info cards ──
            _infoCard(
              FontAwesomeIcons.phone,
              'الهاتف',
              '964-772-459-6108',
              isDark,
              () => _launch('tel:9647724596108'),
            ),
            const SizedBox(height: 10),
            _infoCard(
              FontAwesomeIcons.envelope,
              'البريد الإلكتروني',
              'info@alfatlawy-cpa.com.iq',
              isDark,
              () => _launch('mailto:info@alfatlawy-cpa.com.iq'),
            ),
            const SizedBox(height: 10),
            _infoCard(
              FontAwesomeIcons.locationDot,
              'العنوان',
              'بغداد، حي السيدية',
              isDark,
              null,
            ),
            const SizedBox(height: 10),
            _infoCard(
              FontAwesomeIcons.clock,
              'ساعات العمل',
              'الأحد - الخميس: 9 ص - 5 م',
              isDark,
              null,
            ),
            const SizedBox(height: 20),

            // ── Quick actions ──
            Row(
              children: [
                Expanded(
                  child: _actionBtn(
                    icon: FontAwesomeIcons.whatsapp,
                    label: 'واتساب',
                    color: const Color(0xFF25D366),
                    onTap: () => _launch('https://wa.me/9647724596108'),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: _actionBtn(
                    icon: FontAwesomeIcons.linkedin,
                    label: 'لينكدإن',
                    color: const Color(0xFF0077B5),
                    onTap: () => _launch(
                      'https://www.linkedin.com/company/al-fatlawy-for-management-consultancy',
                    ),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: _actionBtn(
                    icon: FontAwesomeIcons.phone,
                    label: 'اتصال',
                    color: AppTheme.accent,
                    onTap: () => _launch('tel:9647724596108'),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 28),

            // ── Contact form ──
            Row(
              children: [
                Container(width: 4, height: 20, color: AppTheme.accent),
                const SizedBox(width: 10),
                Text(
                  'أرسل رسالة',
                  style: GoogleFonts.tajawal(
                    fontSize: 17,
                    fontWeight: FontWeight.w800,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 16),
            Form(
              key: _formKey,
              child: Column(
                children: [
                  _field(
                    _nameCtrl,
                    'الاسم الكامل',
                    Icons.person,
                    isDark,
                    validator: (v) =>
                        (v == null || v.trim().isEmpty) ? 'مطلوب' : null,
                  ),
                  const SizedBox(height: 12),
                  _field(
                    _emailCtrl,
                    'البريد الإلكتروني',
                    Icons.email,
                    isDark,
                    keyboard: TextInputType.emailAddress,
                    validator: (v) {
                      if (v == null || v.trim().isEmpty) return 'مطلوب';
                      if (!RegExp(r'^[^@\s]+@[^@\s]+\.[^@\s]+$').hasMatch(v)) {
                        return 'بريد إلكتروني غير صالح';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 12),
                  _field(
                    _subjectCtrl,
                    'الموضوع',
                    Icons.subject,
                    isDark,
                    validator: (v) =>
                        (v == null || v.trim().isEmpty) ? 'مطلوب' : null,
                  ),
                  const SizedBox(height: 12),
                  _field(
                    _messageCtrl,
                    'الرسالة',
                    Icons.message,
                    isDark,
                    maxLines: 5,
                    validator: (v) =>
                        (v == null || v.trim().isEmpty) ? 'مطلوب' : null,
                  ),
                  const SizedBox(height: 20),
                  SizedBox(
                    width: double.infinity,
                    height: 50,
                    child: ElevatedButton.icon(
                      onPressed: _submitForm,
                      icon: const Icon(Icons.send, size: 18),
                      label: Text(
                        'إرسال الرسالة',
                        style: GoogleFonts.tajawal(fontWeight: FontWeight.w700),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _infoCard(
    IconData icon,
    String title,
    String value,
    bool isDark,
    VoidCallback? onTap,
  ) {
    return Material(
      color: isDark ? AppTheme.darkBgAlt : Colors.white,
      borderRadius: BorderRadius.circular(12),
      child: InkWell(
        borderRadius: BorderRadius.circular(12),
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            border: Border.all(
              color: isDark ? Colors.white10 : AppTheme.lightBorder,
            ),
          ),
          child: Row(
            children: [
              Container(
                width: 42,
                height: 42,
                decoration: BoxDecoration(
                  color: AppTheme.accentPale.withValues(
                    alpha: isDark ? 0.15 : 1,
                  ),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Center(
                  child: FaIcon(icon, size: 16, color: AppTheme.accent),
                ),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      title,
                      style: GoogleFonts.tajawal(
                        fontSize: 11,
                        color: isDark
                            ? AppTheme.darkTextMuted
                            : AppTheme.lightTextMuted,
                      ),
                    ),
                    const SizedBox(height: 2),
                    Text(
                      value,
                      style: GoogleFonts.tajawal(
                        fontSize: 14,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ],
                ),
              ),
              if (onTap != null)
                Icon(
                  Icons.arrow_forward_ios,
                  size: 14,
                  color: isDark
                      ? AppTheme.darkTextMuted
                      : AppTheme.lightTextMuted,
                ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _actionBtn({
    required IconData icon,
    required String label,
    required Color color,
    required VoidCallback onTap,
  }) {
    return Material(
      color: color.withValues(alpha: 0.1),
      borderRadius: BorderRadius.circular(12),
      child: InkWell(
        borderRadius: BorderRadius.circular(12),
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 16),
          child: Column(
            children: [
              FaIcon(icon, color: color, size: 22),
              const SizedBox(height: 8),
              Text(
                label,
                style: GoogleFonts.tajawal(
                  fontSize: 12,
                  fontWeight: FontWeight.w600,
                  color: color,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _field(
    TextEditingController ctrl,
    String hint,
    IconData icon,
    bool isDark, {
    int maxLines = 1,
    TextInputType? keyboard,
    String? Function(String?)? validator,
  }) {
    return TextFormField(
      controller: ctrl,
      maxLines: maxLines,
      keyboardType: keyboard,
      validator: validator,
      style: GoogleFonts.tajawal(fontSize: 14),
      decoration: InputDecoration(
        hintText: hint,
        hintStyle: GoogleFonts.tajawal(
          fontSize: 13,
          color: isDark ? AppTheme.darkTextMuted : AppTheme.lightTextMuted,
        ),
        prefixIcon: Icon(icon, size: 18, color: AppTheme.accent),
        filled: true,
        fillColor: isDark ? AppTheme.darkBgAlt : AppTheme.lightBgAlt,
        contentPadding: const EdgeInsets.symmetric(
          horizontal: 16,
          vertical: 14,
        ),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: BorderSide(
            color: isDark ? Colors.white10 : AppTheme.lightBorder,
          ),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: BorderSide(
            color: isDark ? Colors.white10 : AppTheme.lightBorder,
          ),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: AppTheme.accent, width: 1.5),
        ),
        errorBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: Colors.redAccent),
        ),
      ),
    );
  }

  void _submitForm() {
    if (_formKey.currentState?.validate() ?? false) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
            style: GoogleFonts.tajawal(fontWeight: FontWeight.w600),
          ),
          backgroundColor: AppTheme.accent2,
          behavior: SnackBarBehavior.floating,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(10),
          ),
        ),
      );
      _nameCtrl.clear();
      _emailCtrl.clear();
      _subjectCtrl.clear();
      _messageCtrl.clear();
    }
  }

  Future<void> _launch(String url) async {
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    }
  }
}
