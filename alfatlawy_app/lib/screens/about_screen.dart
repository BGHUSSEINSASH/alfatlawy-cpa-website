import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../utils/app_theme.dart';
import '../widgets/team_card.dart';

class AboutScreen extends StatelessWidget {
  const AboutScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'من نحن',
          style: GoogleFonts.tajawal(fontWeight: FontWeight.w800),
        ),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(16, 12, 16, 40),
        child: Column(
          children: [
            // ── Company intro ──
            _card(
              isDark: isDark,
              child: Column(
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(12),
                    child: Image.network(
                      'https://alfatlawy-cpa.com.iq/wp-content/uploads/2024/11/Untitled_design-removebg-preview.png',
                      height: 80,
                      errorBuilder: (_, __, ___) => const Icon(
                        Icons.business,
                        size: 60,
                        color: AppTheme.accent,
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),
                  Text(
                    'شركة الفتلاوي للمحاسبة والتدقيق',
                    textAlign: TextAlign.center,
                    style: GoogleFonts.tajawal(
                      fontSize: 18,
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'alfatlawy & Co',
                    style: GoogleFonts.tajawal(
                      fontSize: 14,
                      color: AppTheme.accent,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                  const SizedBox(height: 14),
                  Text(
                    'تأسست شركة الفتلاوي عام 1994 كوكالة تأمين، وتطورت على مدار أكثر من 30 عاماً لتصبح واحدة من أبرز شركات المحاسبة والتدقيق في العراق. نقدم خدمات مهنية متكاملة تشمل التدقيق والمحاسبة والضرائب والاستشارات الإدارية وإدارة المخاطر والموارد البشرية.',
                    textAlign: TextAlign.center,
                    style: GoogleFonts.tajawal(
                      fontSize: 13,
                      height: 1.8,
                      color: isDark
                          ? AppTheme.darkTextSecondary
                          : AppTheme.lightTextSecondary,
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 18),

            // ── Timeline ──
            _sectionTitle('مسيرتنا', isDark),
            const SizedBox(height: 14),
            _timelineItem('1994', 'تأسيس الشركة كوكالة تأمين في بغداد', isDark),
            _timelineItem('2000', 'التوسع في خدمات المحاسبة والتدقيق', isDark),
            _timelineItem('2010', 'الحصول على تراخيص مهنية متقدمة', isDark),
            _timelineItem('2018', 'شراكة استراتيجية مع IWT Global', isDark),
            _timelineItem(
              '2024',
              'أكثر من 500 عميل و 1200 مشروع مكتمل',
              isDark,
            ),
            const SizedBox(height: 24),

            // ── Vision & Mission ──
            _sectionTitle('الرؤية والرسالة', isDark),
            const SizedBox(height: 14),
            _card(
              isDark: isDark,
              child: Column(
                children: [
                  _vmItem(
                    Icons.visibility,
                    'الرؤية',
                    'أن نكون الشركة الرائدة في تقديم الخدمات المهنية في العراق والمنطقة بأعلى معايير الجودة والنزاهة.',
                    isDark,
                  ),
                  const SizedBox(height: 16),
                  Divider(
                    color: isDark ? Colors.white10 : AppTheme.lightBorder,
                  ),
                  const SizedBox(height: 16),
                  _vmItem(
                    Icons.flag,
                    'الرسالة',
                    'تقديم خدمات محاسبية واستشارية متميزة تساعد عملاءنا على تحقيق أهدافهم المالية والإدارية من خلال فريق من الخبراء المتخصصين.',
                    isDark,
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),

            // ── Values ──
            _sectionTitle('قيمنا', isDark),
            const SizedBox(height: 14),
            GridView.count(
              crossAxisCount: 2,
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              mainAxisSpacing: 12,
              crossAxisSpacing: 12,
              childAspectRatio: 1.1,
              children: [
                _valueCard(
                  FontAwesomeIcons.scaleBalanced,
                  'النزاهة',
                  'الالتزام بأعلى معايير الأخلاق المهنية',
                  isDark,
                ),
                _valueCard(
                  FontAwesomeIcons.award,
                  'التميز',
                  'السعي الدائم نحو الكمال في كل ما نقدمه',
                  isDark,
                ),
                _valueCard(
                  FontAwesomeIcons.handshake,
                  'الشراكة',
                  'بناء علاقات طويلة الأمد مع عملائنا',
                  isDark,
                ),
                _valueCard(
                  FontAwesomeIcons.lightbulb,
                  'الابتكار',
                  'تبني أحدث التقنيات والممارسات المهنية',
                  isDark,
                ),
              ],
            ),
            const SizedBox(height: 24),

            // ── Team ──
            _sectionTitle('فريق القيادة', isDark),
            const SizedBox(height: 14),
            const TeamCard(
              imageUrl:
                  'https://alfatlawy-cpa.com.iq/wp-content/uploads/2024/11/co-founder-2.png',
              name: 'اكرم كريم',
              role: 'المؤسس والشريك الإداري',
              fullWidth: true,
            ),
            const SizedBox(height: 12),
            const TeamCard(
              imageUrl:
                  'https://alfatlawy-cpa.com.iq/wp-content/uploads/2024/11/co-founder-1.png',
              name: 'حسن عبد الحسين حمادي',
              role: 'المؤسس المشارك',
              fullWidth: true,
            ),
            const SizedBox(height: 12),
            const TeamCard(
              imageUrl:
                  'https://alfatlawy-cpa.com.iq/wp-content/uploads/2024/11/team-member-1.png',
              name: 'فاضل عبد الحسين',
              role: 'مستشار قانوني',
              fullWidth: true,
            ),
            const SizedBox(height: 24),

            // ── IWT Partnership ──
            _sectionTitle('شراكتنا الدولية', isDark),
            const SizedBox(height: 14),
            _card(
              isDark: isDark,
              child: Column(
                children: [
                  Container(
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: AppTheme.accentPale.withValues(
                        alpha: isDark ? 0.15 : 1,
                      ),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: const FaIcon(
                      FontAwesomeIcons.globe,
                      size: 36,
                      color: AppTheme.accent,
                    ),
                  ),
                  const SizedBox(height: 14),
                  Text(
                    'IWT Global',
                    style: GoogleFonts.tajawal(
                      fontSize: 18,
                      fontWeight: FontWeight.w800,
                      color: AppTheme.accent,
                    ),
                  ),
                  const SizedBox(height: 10),
                  Text(
                    'نفتخر بشراكتنا الاستراتيجية مع IWT Global الرائدة في مجال الخدمات المالية الدولية. هذه الشراكة تمكننا من تقديم خدمات بمعايير عالمية وتوسيع نطاق عملنا ليشمل الأسواق الدولية.',
                    textAlign: TextAlign.center,
                    style: GoogleFonts.tajawal(
                      fontSize: 13,
                      height: 1.8,
                      color: isDark
                          ? AppTheme.darkTextSecondary
                          : AppTheme.lightTextSecondary,
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

  // ── helpers ──

  Widget _sectionTitle(String title, bool isDark) {
    return Row(
      children: [
        Container(width: 4, height: 20, color: AppTheme.accent),
        const SizedBox(width: 10),
        Text(
          title,
          style: GoogleFonts.tajawal(fontSize: 17, fontWeight: FontWeight.w800),
        ),
      ],
    );
  }

  Widget _card({required bool isDark, required Widget child}) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(22),
      decoration: BoxDecoration(
        color: isDark ? AppTheme.darkBgAlt : Colors.white,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(
          color: isDark ? Colors.white10 : AppTheme.lightBorder,
        ),
        boxShadow: [
          if (!isDark)
            BoxShadow(
              color: Colors.black.withValues(alpha: 0.04),
              blurRadius: 12,
              offset: const Offset(0, 3),
            ),
        ],
      ),
      child: child,
    );
  }

  Widget _timelineItem(String year, String desc, bool isDark) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 16),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Column(
            children: [
              Container(
                width: 40,
                height: 40,
                decoration: BoxDecoration(
                  color: AppTheme.accent,
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Center(
                  child: Text(
                    year,
                    style: GoogleFonts.tajawal(
                      fontSize: 11,
                      fontWeight: FontWeight.w800,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
              Container(
                width: 2,
                height: 20,
                color: AppTheme.accent.withValues(alpha: 0.2),
              ),
            ],
          ),
          const SizedBox(width: 14),
          Expanded(
            child: Container(
              margin: const EdgeInsets.only(top: 8),
              child: Text(
                desc,
                style: GoogleFonts.tajawal(
                  fontSize: 13,
                  height: 1.6,
                  color: isDark
                      ? AppTheme.darkTextSecondary
                      : AppTheme.lightTextSecondary,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _vmItem(IconData icon, String title, String desc, bool isDark) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          width: 40,
          height: 40,
          decoration: BoxDecoration(
            color: AppTheme.accentPale.withValues(alpha: isDark ? 0.15 : 1),
            borderRadius: BorderRadius.circular(10),
          ),
          child: Icon(icon, size: 18, color: AppTheme.accent),
        ),
        const SizedBox(width: 14),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: GoogleFonts.tajawal(
                  fontSize: 15,
                  fontWeight: FontWeight.w700,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                desc,
                style: GoogleFonts.tajawal(
                  fontSize: 12,
                  height: 1.7,
                  color: isDark
                      ? AppTheme.darkTextSecondary
                      : AppTheme.lightTextSecondary,
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _valueCard(IconData icon, String title, String desc, bool isDark) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: isDark ? AppTheme.darkBgAlt : Colors.white,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(
          color: isDark ? Colors.white10 : AppTheme.lightBorder,
        ),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          FaIcon(icon, size: 22, color: AppTheme.accent2),
          const SizedBox(height: 10),
          Text(
            title,
            style: GoogleFonts.tajawal(
              fontSize: 14,
              fontWeight: FontWeight.w700,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            desc,
            textAlign: TextAlign.center,
            style: GoogleFonts.tajawal(
              fontSize: 11,
              height: 1.5,
              color: isDark ? AppTheme.darkTextMuted : AppTheme.lightTextMuted,
            ),
          ),
        ],
      ),
    );
  }
}
