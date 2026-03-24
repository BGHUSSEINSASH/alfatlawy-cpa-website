import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import '../utils/app_theme.dart';

class _ServiceData {
  final IconData icon;
  final String title;
  final String desc;
  final List<String> details;
  const _ServiceData(this.icon, this.title, this.desc, this.details);
}

const _services = [
  _ServiceData(
    FontAwesomeIcons.magnifyingGlassDollar,
    'التدقيق والمراجعة',
    'خدمات تدقيق خارجي وداخلي شاملة',
    [
      'تدقيق القوائم المالية السنوية',
      'التدقيق الداخلي لأنظمة الرقابة',
      'تدقيق الالتزام بالقوانين والتشريعات',
      'تدقيق عمليات خاصة ومشاريع',
      'إعداد تقارير التدقيق المهنية',
    ],
  ),
  _ServiceData(
    FontAwesomeIcons.calculator,
    'المحاسبة والتقارير المالية',
    'مسك السجلات وإعداد القوائم المالية',
    [
      'مسك السجلات المحاسبية اليومية',
      'إعداد الميزانيات والقوائم المالية',
      'التسويات البنكية الشهرية',
      'إعداد تقارير التدفق النقدي',
      'تحليل الانحرافات المالية',
    ],
  ),
  _ServiceData(
    FontAwesomeIcons.fileInvoiceDollar,
    'الضرائب والالتزامات',
    'إدارة ضريبية وتخطيط مالي',
    [
      'إعداد وتقديم الإقرارات الضريبية',
      'التخطيط الضريبي الاستراتيجي',
      'تمثيل الشركات أمام الهيئات الضريبية',
      'استشارات ضريبة القيمة المضافة',
      'مراجعة الالتزامات الضريبية',
    ],
  ),
  _ServiceData(
    FontAwesomeIcons.shieldHalved,
    'التأمين وإدارة المخاطر',
    'حلول تأمينية شاملة لحماية أصولكم',
    [
      'تقييم وإدارة المخاطر المؤسسية',
      'استشارات التأمين على الحياة والممتلكات',
      'تقييم كفاية التغطيات التأمينية',
      'إدارة المطالبات التأمينية',
      'برامج تأمين الشركات الشاملة',
    ],
  ),
  _ServiceData(
    FontAwesomeIcons.chartLine,
    'الاستشارات الإدارية',
    'استشارات إدارية ومالية متقدمة',
    [
      'إعداد دراسات الجدوى الاقتصادية',
      'التخطيط الاستراتيجي للشركات',
      'إعادة هيكلة المنظمات',
      'تطوير أنظمة الحوكمة المؤسسية',
      'استشارات الاندماج والاستحواذ',
    ],
  ),
  _ServiceData(
    FontAwesomeIcons.usersGear,
    'الموارد البشرية',
    'حلول متكاملة لإدارة رأس المال البشري',
    [
      'تصميم الهياكل التنظيمية',
      'إعداد نظم الرواتب والحوافز',
      'تقييم الأداء الوظيفي',
      'التوظيف واستقطاب الكفاءات',
      'برامج التدريب والتطوير المهني',
    ],
  ),
];

class ServicesScreen extends StatelessWidget {
  const ServicesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'خدماتنا',
          style: GoogleFonts.tajawal(fontWeight: FontWeight.w800),
        ),
      ),
      body: ListView.builder(
        padding: const EdgeInsets.fromLTRB(16, 12, 16, 32),
        itemCount: _services.length,
        itemBuilder: (context, i) {
          final s = _services[i];
          return _ServiceExpandCard(service: s, isDark: isDark);
        },
      ),
    );
  }
}

class _ServiceExpandCard extends StatefulWidget {
  final _ServiceData service;
  final bool isDark;
  const _ServiceExpandCard({required this.service, required this.isDark});

  @override
  State<_ServiceExpandCard> createState() => _ServiceExpandCardState();
}

class _ServiceExpandCardState extends State<_ServiceExpandCard> {
  bool _expanded = false;

  @override
  Widget build(BuildContext context) {
    final s = widget.service;
    return AnimatedContainer(
      duration: const Duration(milliseconds: 300),
      margin: const EdgeInsets.only(bottom: 14),
      decoration: BoxDecoration(
        color: widget.isDark ? AppTheme.darkBgAlt : Colors.white,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(
          color: _expanded
              ? AppTheme.accent.withValues(alpha: 0.5)
              : (widget.isDark ? Colors.white10 : AppTheme.lightBorder),
        ),
        boxShadow: [
          if (!widget.isDark)
            BoxShadow(
              color: Colors.black.withValues(alpha: 0.04),
              blurRadius: 12,
              offset: const Offset(0, 3),
            ),
        ],
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(14),
          onTap: () => setState(() => _expanded = !_expanded),
          child: Padding(
            padding: const EdgeInsets.all(18),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Container(
                      width: 48,
                      height: 48,
                      decoration: BoxDecoration(
                        color: AppTheme.accentPale.withValues(
                          alpha: widget.isDark ? 0.15 : 1,
                        ),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Center(
                        child: FaIcon(s.icon, size: 20, color: AppTheme.accent),
                      ),
                    ),
                    const SizedBox(width: 14),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            s.title,
                            style: GoogleFonts.tajawal(
                              fontSize: 16,
                              fontWeight: FontWeight.w700,
                            ),
                          ),
                          const SizedBox(height: 3),
                          Text(
                            s.desc,
                            style: GoogleFonts.tajawal(
                              fontSize: 12,
                              color: widget.isDark
                                  ? AppTheme.darkTextSecondary
                                  : AppTheme.lightTextSecondary,
                            ),
                          ),
                        ],
                      ),
                    ),
                    AnimatedRotation(
                      turns: _expanded ? 0.5 : 0,
                      duration: const Duration(milliseconds: 200),
                      child: Icon(
                        Icons.keyboard_arrow_down,
                        color: AppTheme.accent,
                        size: 24,
                      ),
                    ),
                  ],
                ),
                AnimatedCrossFade(
                  firstChild: const SizedBox.shrink(),
                  secondChild: Padding(
                    padding: const EdgeInsets.only(top: 16),
                    child: Column(
                      children: [
                        Container(
                          width: double.infinity,
                          height: 1,
                          color: widget.isDark
                              ? Colors.white10
                              : AppTheme.lightBorder,
                        ),
                        const SizedBox(height: 14),
                        ...s.details.map(
                          (d) => Padding(
                            padding: const EdgeInsets.only(bottom: 10),
                            child: Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Container(
                                  margin: const EdgeInsets.only(top: 6),
                                  width: 6,
                                  height: 6,
                                  decoration: BoxDecoration(
                                    color: AppTheme.accent2,
                                    borderRadius: BorderRadius.circular(3),
                                  ),
                                ),
                                const SizedBox(width: 10),
                                Expanded(
                                  child: Text(
                                    d,
                                    style: GoogleFonts.tajawal(
                                      fontSize: 13,
                                      height: 1.5,
                                      color: widget.isDark
                                          ? AppTheme.darkTextSecondary
                                          : AppTheme.lightTextSecondary,
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  crossFadeState: _expanded
                      ? CrossFadeState.showSecond
                      : CrossFadeState.showFirst,
                  duration: const Duration(milliseconds: 300),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
