import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';
import '../utils/app_theme.dart';
import '../widgets/stat_card.dart';
import '../widgets/service_card.dart';
import '../widgets/team_card.dart';

class HomeScreen extends StatelessWidget {
  final VoidCallback onToggleTheme;
  final ValueChanged<int>? onNavigateTab;
  const HomeScreen(
      {super.key, required this.onToggleTheme, this.onNavigateTab});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          // ───── App Bar ─────
          SliverAppBar(
            floating: true,
            snap: true,
            title: Row(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(8),
                  child: Image.network(
                    'https://alfatlawy-cpa.com.iq/wp-content/uploads/2024/11/Untitled_design-removebg-preview.png',
                    height: 34,
                    errorBuilder: (_, __, ___) =>
                        const Icon(Icons.business, color: AppTheme.accent),
                  ),
                ),
                const SizedBox(width: 10),
                Text(
                  'alfatlawy Co',
                  style: GoogleFonts.tajawal(
                    fontWeight: FontWeight.w800,
                    fontSize: 17,
                  ),
                ),
              ],
            ),
            actions: [
              IconButton(
                icon: Icon(
                  isDark ? Icons.light_mode : Icons.dark_mode,
                  size: 20,
                ),
                onPressed: onToggleTheme,
              ),
              const SizedBox(width: 4),
            ],
          ),

          // ───── Hero ─────
          SliverToBoxAdapter(
            child: Container(
              padding: const EdgeInsets.fromLTRB(24, 20, 24, 32),
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [
                    isDark ? AppTheme.darkBg : Colors.white,
                    isDark ? AppTheme.darkBgAlt : AppTheme.lightBgAlt,
                  ],
                ),
              ),
              child: Column(
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 8,
                    ),
                    decoration: BoxDecoration(
                      color: AppTheme.accentPale.withValues(
                        alpha: isDark ? 0.15 : 1,
                      ),
                      borderRadius: BorderRadius.circular(50),
                      border: Border.all(
                        color: AppTheme.accent.withValues(alpha: 0.12),
                      ),
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const FaIcon(
                          FontAwesomeIcons.shieldHalved,
                          size: 12,
                          color: AppTheme.accent,
                        ),
                        const SizedBox(width: 8),
                        Text(
                          'شركة الفتلاوي للمحاسبة والتدقيق',
                          style: GoogleFonts.tajawal(
                            fontSize: 11,
                            fontWeight: FontWeight.w600,
                            color: AppTheme.accent,
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 24),
                  Text(
                    'نقدم أفضل الخدمات في مجال',
                    textAlign: TextAlign.center,
                    style: GoogleFonts.tajawal(
                      fontSize: 24,
                      fontWeight: FontWeight.w800,
                      height: 1.4,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'المحاسبة والتدقيق',
                    textAlign: TextAlign.center,
                    style: GoogleFonts.tajawal(
                      fontSize: 28,
                      fontWeight: FontWeight.w800,
                      color: AppTheme.accent,
                    ),
                  ),
                  const SizedBox(height: 16),
                  Text(
                    'نقدم خدمات محاسبية واستشارية متكاملة بأعلى معايير الجودة والمهنية منذ أكثر من 30 عاماً',
                    textAlign: TextAlign.center,
                    style: GoogleFonts.tajawal(
                      fontSize: 14,
                      color: isDark
                          ? AppTheme.darkTextSecondary
                          : AppTheme.lightTextSecondary,
                      height: 1.8,
                    ),
                  ),
                  const SizedBox(height: 24),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      ElevatedButton.icon(
                        onPressed: () => onNavigateTab?.call(1),
                        icon: const Icon(Icons.arrow_back, size: 16),
                        label: const Text('خدماتنا'),
                      ),
                      const SizedBox(width: 12),
                      OutlinedButton(
                        onPressed: () => onNavigateTab?.call(3),
                        child: const Text('من نحن'),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),

          // ───── Stats ─────
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(16, 0, 16, 24),
              child: GridView.count(
                crossAxisCount: 2,
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                mainAxisSpacing: 12,
                crossAxisSpacing: 12,
                childAspectRatio: 1.6,
                children: const [
                  StatCard(
                    icon: Icons.calendar_today,
                    value: '+30',
                    label: 'سنوات الخبرة',
                  ),
                  StatCard(
                    icon: Icons.handshake,
                    value: '+500',
                    label: 'عميل سعيد',
                  ),
                  StatCard(
                    icon: Icons.work,
                    value: '+1200',
                    label: 'مشروع مكتمل',
                  ),
                  StatCard(
                    icon: Icons.person,
                    value: '+50',
                    label: 'خبير متخصص',
                  ),
                ],
              ),
            ),
          ),

          // ───── Services Preview ─────
          SliverToBoxAdapter(
            child: _buildSection(
              context: context,
              tag: 'ماذا نقدم',
              title: 'خدماتنا',
              child: SizedBox(
                height: 180,
                child: ListView(
                  scrollDirection: Axis.horizontal,
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  children: const [
                    ServiceCard(
                      icon: FontAwesomeIcons.magnifyingGlassDollar,
                      title: 'التدقيق',
                      desc: 'خدمات تدقيق خارجي وداخلي',
                    ),
                    ServiceCard(
                      icon: FontAwesomeIcons.calculator,
                      title: 'المحاسبة',
                      desc: 'مسك السجلات المحاسبية',
                    ),
                    ServiceCard(
                      icon: FontAwesomeIcons.fileInvoiceDollar,
                      title: 'الضرائب',
                      desc: 'إدارة وتخطيط ضريبي',
                    ),
                    ServiceCard(
                      icon: FontAwesomeIcons.shieldHalved,
                      title: 'التأمين',
                      desc: 'حلول تأمينية شاملة',
                    ),
                    ServiceCard(
                      icon: FontAwesomeIcons.chartLine,
                      title: 'الاستشارات',
                      desc: 'استشارات إدارية ومالية',
                    ),
                    ServiceCard(
                      icon: FontAwesomeIcons.usersGear,
                      title: 'الموارد البشرية',
                      desc: 'حلول متكاملة',
                    ),
                  ],
                ),
              ),
            ),
          ),

          // ───── Team Preview ─────
          SliverToBoxAdapter(
            child: _buildSection(
              context: context,
              tag: 'فريق العمل',
              title: 'فريقنا',
              bgAlt: true,
              child: SizedBox(
                height: 220,
                child: ListView(
                  scrollDirection: Axis.horizontal,
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  children: const [
                    TeamCard(
                      imageUrl:
                          'https://alfatlawy-cpa.com.iq/wp-content/uploads/2024/11/co-founder-2.png',
                      name: 'اكرم حسن عبد الحسين',
                      role: 'المؤسس والشريك الإداري',
                    ),
                    TeamCard(
                      imageUrl:
                          'https://alfatlawy-cpa.com.iq/wp-content/uploads/2024/11/co-founder-1.png',
                      name: 'حسن عبد الحسين حمادي',
                      role: 'المؤسس المشارك',
                    ),
                    TeamCard(
                      imageUrl:
                          'https://alfatlawy-cpa.com.iq/wp-content/uploads/2024/11/team-member-1.png',
                      name: 'فاضل عبد الحسين',
                      role: 'مستشار قانوني',
                    ),
                  ],
                ),
              ),
            ),
          ),

          // ───── CTA ─────
          SliverToBoxAdapter(
            child: Container(
              margin: const EdgeInsets.all(16),
              padding: const EdgeInsets.all(28),
              decoration: BoxDecoration(
                color: AppTheme.primary,
                borderRadius: BorderRadius.circular(16),
              ),
              child: Column(
                children: [
                  Text(
                    'هل تحتاج إلى استشارة مهنية؟',
                    textAlign: TextAlign.center,
                    style: GoogleFonts.tajawal(
                      fontSize: 20,
                      fontWeight: FontWeight.w800,
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(height: 10),
                  Text(
                    'تواصل معنا اليوم واحصل على استشارة من خبرائنا',
                    textAlign: TextAlign.center,
                    style: GoogleFonts.tajawal(
                      fontSize: 13,
                      color: Colors.white54,
                      height: 1.7,
                    ),
                  ),
                  const SizedBox(height: 20),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.white,
                          foregroundColor: AppTheme.primary,
                        ),
                        onPressed: () => _launchWhatsApp(),
                        child: const Text('تواصل معنا'),
                      ),
                      const SizedBox(width: 12),
                      OutlinedButton(
                        style: OutlinedButton.styleFrom(
                          foregroundColor: Colors.white70,
                          side: const BorderSide(color: Colors.white24),
                        ),
                        onPressed: () => _launchPhone(),
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            const Text('اتصل بنا'),
                            const SizedBox(width: 6),
                            const Icon(Icons.phone, size: 16),
                          ],
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),

          // ───── Footer ─────
          SliverToBoxAdapter(
            child: Container(
              padding: const EdgeInsets.all(20),
              color: isDark ? AppTheme.darkBgAlt : AppTheme.lightBgAlt,
              child: Column(
                children: [
                  Text(
                    'Copyright © 2026 alfatlawy Co',
                    style: GoogleFonts.tajawal(
                      fontSize: 11,
                      color: isDark
                          ? AppTheme.darkTextMuted
                          : AppTheme.lightTextMuted,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    'Designed by BGHUSSEINSASH',
                    style: GoogleFonts.tajawal(
                      fontSize: 11,
                      color: AppTheme.accent,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSection({
    required BuildContext context,
    required String tag,
    required String title,
    required Widget child,
    bool bgAlt = false,
  }) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 32),
      color: bgAlt ? (isDark ? AppTheme.darkBgAlt : AppTheme.lightBgAlt) : null,
      child: Column(
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 5),
            decoration: BoxDecoration(
              color: AppTheme.accentPale.withValues(alpha: isDark ? 0.15 : 1),
              borderRadius: BorderRadius.circular(50),
            ),
            child: Text(
              tag,
              style: GoogleFonts.tajawal(
                fontSize: 11,
                fontWeight: FontWeight.w700,
                color: AppTheme.accent,
              ),
            ),
          ),
          const SizedBox(height: 6),
          Container(width: 36, height: 2, color: AppTheme.accent),
          const SizedBox(height: 10),
          Text(
            title,
            style: GoogleFonts.tajawal(
              fontSize: 20,
              fontWeight: FontWeight.w800,
            ),
          ),
          const SizedBox(height: 20),
          child,
        ],
      ),
    );
  }

  Future<void> _launchWhatsApp() async {
    final uri = Uri.parse('https://wa.me/9647724596108');
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    }
  }

  Future<void> _launchPhone() async {
    final uri = Uri.parse('tel:9647724596108');
    if (await canLaunchUrl(uri)) await launchUrl(uri);
  }
}
