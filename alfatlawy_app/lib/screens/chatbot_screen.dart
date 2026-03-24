import 'dart:math';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:url_launcher/url_launcher.dart';
import '../utils/app_theme.dart';

// ─── Chat message model ───
class _ChatMsg {
  final String text;
  final bool isUser;
  final bool hasLinks;
  _ChatMsg({required this.text, required this.isUser, this.hasLinks = false});
}

// ─── Response pattern: trigger keywords → response text ───
class _Pattern {
  final List<String> triggers;
  final String response;
  const _Pattern(this.triggers, this.response);
}

// ─── Full chatbot data per language (matching website main.js exactly) ───
class _ChatLangData {
  final String greeting;
  final List<String> quickReplies;
  final String placeholder;
  final List<_Pattern> patterns;
  final String fallback;
  const _ChatLangData({
    required this.greeting,
    required this.quickReplies,
    required this.placeholder,
    required this.patterns,
    required this.fallback,
  });
}

final _chatDatabase = <String, _ChatLangData>{
  'ar': _ChatLangData(
    greeting:
        'مرحباً! 👋 أنا المساعد الذكي لشركة الفتلاوي.\nكيف يمكنني مساعدتك اليوم؟',
    quickReplies: [
      'ما هي خدماتكم؟',
      'كيف أتواصل معكم؟',
      'أريد استشارة',
      'من أنتم؟',
      'الشراكة الدولية'
    ],
    placeholder: 'اكتب رسالتك...',
    patterns: [
      _Pattern(
        ['خدمات', 'خدماتكم', 'ماذا تقدم', 'service'],
        'نقدم مجموعة متكاملة من الخدمات المهنية:\n\n🔍 التدقيق — تدقيق خارجي وداخلي ومسبق\n📊 المحاسبة — مسك السجلات والقوائم المالية\n💰 الضرائب — تخطيط وإدارة ضريبية\n🛡️ التأمين — حلول تأمينية شاملة\n📈 الاستشارات — استشارات إدارية ومالية\n👥 الموارد البشرية — حلول متكاملة\n\nهل تريد معرفة المزيد عن خدمة معينة؟',
      ),
      _Pattern(
        [
          'تواصل',
          'اتصل',
          'رقم',
          'هاتف',
          'عنوان',
          'موقع',
          'ايميل',
          'بريد',
          'contact'
        ],
        'يمكنك التواصل معنا عبر:\n\n📞 الهاتف: 9647724596108\n📧 البريد: info@alfatlawy-cpa.com.iq\n📍 العنوان: بغداد - السيدية\n💬 واتساب: wa.me/9647724596108\n\nنحن متاحون لخدمتكم!',
      ),
      _Pattern(
        ['استشار', 'مشور', 'نصيحة', 'مساعدة مالية'],
        'بالتأكيد! نقدم استشارات مهنية متخصصة في:\n\n• الاستشارات المالية والمحاسبية\n• التخطيط الضريبي\n• إعادة هيكلة الشركات\n• دراسات الجدوى\n\nيمكنك حجز استشارة عبر التواصل المباشر على الرقم: 9647724596108',
      ),
      _Pattern(
        ['من أنتم', 'من نحن', 'عن الشركة', 'تعريف', 'تأسيس', 'about'],
        'شركة الفتلاوي للمحاسبة والتدقيق تأسست عام 1994 كوكالة تأمين لشركة التأمين الوطنية.\n\nعلى مدى أكثر من 30 عاماً توسعنا في مجالات المحاسبة والتدقيق والاستشارات الإدارية.\n\n✅ أكثر من 500 عميل\n✅ أكثر من 1200 مشروع مكتمل\n✅ فريق من 50+ خبير متخصص',
      ),
      _Pattern(
        ['شراكة', 'شريك', 'دولي', 'iwt', 'عالمي', 'partner'],
        'نفتخر بشراكتنا الاستراتيجية مع IWT Global، إحدى الشركات الرائدة عالمياً في الاستشارات والخدمات المهنية.\n\nهذه الشراكة توفر لعملائنا:\n🌍 وصول لشبكة دولية من الخبراء\n📋 تطبيق أعلى المعايير الدولية\n🎓 برامج تدريب دولية متقدمة\n💻 أحدث التقنيات والأدوات',
      ),
      _Pattern(
        ['تدقيق', 'مراجع', 'audit'],
        'خدمات التدقيق لدينا تشمل:\n\n🔍 التدقيق الخارجي — فحص البيانات المالية وفق معايير ISA\n🔎 التدقيق الداخلي — تقييم نظام الرقابة الداخلية\n📋 التدقيق المسبق — مراجعة مسبقة للعمليات المالية\n📊 تدقيق الأغراض الخاصة — تقارير متخصصة',
      ),
      _Pattern(
        ['محاسب', 'حساب', 'قوائم مالية', 'سجلات'],
        'خدمات المحاسبة تشمل:\n\n📒 مسك السجلات المحاسبية\n📊 إعداد القوائم المالية وفق المعايير الدولية IFRS\n📑 ترجمة القوائم المالية\n📈 التحليل المالي والتقارير الدورية',
      ),
      _Pattern(
        ['ضريب', 'ضرائب', 'tax'],
        'خدمات الضرائب لدينا:\n\n💰 إدارة الضرائب\n📋 التخطيط الضريبي الاستراتيجي\n📄 إعداد الإقرارات الضريبية\n⚖️ تسوية النزاعات الضريبية',
      ),
      _Pattern(
        ['تأمين', 'insurance'],
        'حلول التأمين لدينا:\n\n🛡️ تأمين شامل للشركات والأفراد\n📋 حماية من المخاطر المحتملة\n🏢 تأمين الممتلكات والأعمال\n\nبدأنا رحلتنا كوكالة تأمين عام 1994!',
      ),
      _Pattern(
        ['موارد بشرية', 'توظيف', 'hr', 'وظيفة', 'عمل', 'انضم'],
        'خدمات الموارد البشرية:\n\n👥 حلول متكاملة لإدارة الموارد البشرية\n🎯 اكتساب المواهب والتوظيف\n📊 إدارة الأداء\n\nإذا كنت ترغب بالانضمام لفريقنا، تواصل معنا على: 9647724596108',
      ),
      _Pattern(
        ['فريق', 'أعضاء', 'موظف', 'مؤسس', 'team'],
        'فريقنا يتكون من نخبة من الخبراء:\n\n👤 اكرم حسن عبد الحسين — المؤسس والشريك الإداري\n👤 حسن عبد الحسين حمادي — المؤسس المشارك\n👤 فاضل عبد الحسين — مستشار قانوني\n\nوفريق من 50+ خبير متخصص!',
      ),
      _Pattern(
        ['تطبيق', 'app', 'اندرويد', 'ايفون', 'جوال', 'موبايل'],
        'تطبيق شركة الفتلاوي متاح على:\n\n📱 Google Play لأجهزة أندرويد\n🍎 App Store لأجهزة آيفون\n\nمن خلال التطبيق يمكنك:\n• متابعة ملفاتك وتقاريرك\n• التواصل المباشر مع الخبراء\n• الحصول على إشعارات فورية\n• حماية كاملة لبياناتك',
      ),
      _Pattern(
        ['سعر', 'تكلفة', 'كم', 'أسعار', 'price'],
        'تختلف الأسعار حسب نوع الخدمة وحجم المشروع.\nللحصول على عرض سعر مخصص، يرجى التواصل مع فريقنا:\n\n📞 9647724596108\n📧 info@alfatlawy-cpa.com.iq',
      ),
      _Pattern(
        ['شكر', 'شكراً', 'ممتاز', 'رائع', 'جيد', 'حلو', 'thank'],
        'شكراً لك! 😊 يسعدنا خدمتك.\nهل تحتاج أي شيء آخر؟',
      ),
      _Pattern(
        ['سلام', 'مرحبا', 'هلا', 'اهلا', 'صباح', 'مساء', 'hello', 'hi', 'hey'],
        'أهلاً وسهلاً بك! 😊\nكيف يمكنني مساعدتك اليوم؟',
      ),
    ],
    fallback:
        'عذراً، لم أفهم سؤالك بشكل كامل. يمكنك:\n\n• اختيار أحد الأسئلة السريعة أدناه\n• أو التواصل مباشرة عبر واتساب: wa.me/9647724596108\n\nكيف يمكنني مساعدتك؟',
  ),
  'en': _ChatLangData(
    greeting:
        'Hello! 👋 I\'m the Al-Fatlawy smart assistant.\nHow can I help you today?',
    quickReplies: [
      'What are your services?',
      'How to contact you?',
      'I need a consultation',
      'About the company',
      'International partnership'
    ],
    placeholder: 'Type your message...',
    patterns: [
      _Pattern(
        ['service', 'offer', 'provide'],
        'We offer a comprehensive suite of professional services:\n\n🔍 Auditing — External, internal, and pre-audit\n📊 Accounting — Bookkeeping and financial statements\n💰 Tax — Tax planning and management\n🛡️ Insurance — Comprehensive solutions\n📈 Consulting — Management and financial consulting\n👥 HR — Integrated HR solutions\n\nWould you like to know more about a specific service?',
      ),
      _Pattern(
        ['contact', 'phone', 'email', 'address', 'reach'],
        'You can reach us through:\n\n📞 Phone: 9647724596108\n📧 Email: info@alfatlawy-cpa.com.iq\n📍 Address: Baghdad - Al-Saydiya\n💬 WhatsApp: wa.me/9647724596108\n\nWe\'re available to serve you!',
      ),
      _Pattern(
        ['consult', 'advice', 'help'],
        'Absolutely! We provide specialized professional consulting in:\n\n• Financial and accounting consulting\n• Tax planning\n• Corporate restructuring\n• Feasibility studies\n\nBook a consultation: 9647724596108',
      ),
      _Pattern(
        ['about', 'who', 'company', 'founded'],
        'Al-Fatlawy Accounting & Auditing was founded in 1994 as an insurance agency.\n\nOver 30+ years, we expanded into accounting, auditing, and management consulting.\n\n✅ 500+ clients\n✅ 1200+ completed projects\n✅ 50+ expert specialists',
      ),
      _Pattern(
        ['partner', 'iwt', 'international', 'global'],
        'We\'re proud of our strategic partnership with IWT Global.\n\nThis partnership provides:\n🌍 Global expert network\n📋 International standards\n🎓 Advanced training programs\n💻 Latest technologies',
      ),
      _Pattern(
        ['audit'],
        'Our auditing services include:\n\n🔍 External audit — per ISA standards\n🔎 Internal audit — control system evaluation\n📋 Pre-audit — advance financial review\n📊 Special purpose audit — specialized reports',
      ),
      _Pattern(
        ['accounting', 'bookkeeping', 'financial statement'],
        'Our accounting services:\n\n📒 Bookkeeping\n📊 Financial statements per IFRS\n📑 Financial statement translation\n📈 Financial analysis & periodic reports',
      ),
      _Pattern(
        ['tax'],
        'Our tax services:\n\n💰 Tax management\n📋 Strategic tax planning\n📄 Tax return preparation\n⚖️ Tax dispute resolution',
      ),
      _Pattern(
        ['insurance'],
        'Insurance solutions:\n\n🛡️ Comprehensive corporate & individual insurance\n📋 Risk protection\n🏢 Property & business insurance\n\nWe started as an insurance agency in 1994!',
      ),
      _Pattern(
        ['hr', 'human resource', 'job', 'career', 'join'],
        'HR Services:\n\n👥 Integrated HR management\n🎯 Talent acquisition & recruitment\n📊 Performance management\n\nWant to join our team? Contact us: 9647724596108',
      ),
      _Pattern(
        ['team', 'member', 'founder'],
        'Our leadership team:\n\n👤 Akram Hassan — Founder & Managing Partner\n👤 Hassan Abdul-Hussein — Co-Founder\n👤 Fadhil Abdul-Hussein — Legal Advisor\n\nPlus 50+ expert specialists!',
      ),
      _Pattern(
        ['app', 'android', 'iphone', 'mobile', 'download'],
        'The Al-Fatlawy app is available on:\n\n📱 Google Play for Android\n🍎 App Store for iPhone\n\nFeatures:\n• Track your files & reports\n• Direct expert communication\n• Instant notifications\n• Full data protection',
      ),
      _Pattern(
        ['price', 'cost', 'how much', 'fee'],
        'Prices vary based on the service type and project scope.\nFor a custom quote, please contact our team:\n\n📞 9647724596108\n📧 info@alfatlawy-cpa.com.iq',
      ),
      _Pattern(
        ['thank', 'great', 'good', 'excellent'],
        'Thank you! 😊 Happy to help.\nAnything else?',
      ),
      _Pattern(
        ['hello', 'hi', 'hey', 'good morning', 'good evening'],
        'Hello! 😊 How can I help you today?',
      ),
    ],
    fallback:
        'Sorry, I didn\'t fully understand your question. You can:\n\n• Choose one of the quick replies below\n• Or contact us via WhatsApp: wa.me/9647724596108\n\nHow can I help you?',
  ),
};

// ═══════════════════════════════════════════════
// ChatbotScreen — Full smart assistant
// ═══════════════════════════════════════════════
class ChatbotScreen extends StatefulWidget {
  const ChatbotScreen({super.key});

  @override
  State<ChatbotScreen> createState() => _ChatbotScreenState();
}

class _ChatbotScreenState extends State<ChatbotScreen>
    with TickerProviderStateMixin {
  final _controller = TextEditingController();
  final _scrollController = ScrollController();
  final _messages = <_ChatMsg>[];
  final _random = Random();
  bool _typing = false;
  String _lang = 'ar';
  bool _showQuickReplies = true;

  _ChatLangData get _data => _chatDatabase[_lang]!;

  @override
  void initState() {
    super.initState();
    _messages.add(_ChatMsg(text: _data.greeting, isUser: false));
  }

  @override
  void dispose() {
    _controller.dispose();
    _scrollController.dispose();
    super.dispose();
  }

  // ─── Send message ───
  void _send(String text) {
    final trimmed = text.trim();
    if (trimmed.isEmpty) return;
    setState(() {
      _messages.add(_ChatMsg(text: trimmed, isUser: true));
      _typing = true;
      _showQuickReplies = false;
    });
    _controller.clear();
    _scrollDown();

    // Variable delay like website (800 + random up to 600ms)
    final delay = 800 + _random.nextInt(600);
    Future.delayed(Duration(milliseconds: delay), () {
      if (!mounted) return;
      final reply = _findResponse(trimmed);
      setState(() {
        _typing = false;
        _messages.add(_ChatMsg(
            text: reply, isUser: false, hasLinks: reply.contains('wa.me')));
        _showQuickReplies = true;
      });
      _scrollDown();
    });
  }

  void _scrollDown() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_scrollController.hasClients) {
        _scrollController.animateTo(
          _scrollController.position.maxScrollExtent + 120,
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeOut,
        );
      }
    });
  }

  // ─── Pattern matching (same logic as website main.js findResponse) ───
  String _findResponse(String input) {
    final lower = input.toLowerCase();
    for (final pattern in _data.patterns) {
      for (final trigger in pattern.triggers) {
        if (lower.contains(trigger.toLowerCase())) {
          return pattern.response;
        }
      }
    }
    return _data.fallback;
  }

  // ─── Toggle language ───
  void _toggleLang() {
    setState(() {
      _lang = _lang == 'ar' ? 'en' : 'ar';
      _messages.clear();
      _messages.add(_ChatMsg(text: _data.greeting, isUser: false));
      _showQuickReplies = true;
    });
  }

  // ─── Build ───
  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Scaffold(
      appBar: AppBar(
        title: Row(
          children: [
            Container(
              width: 36,
              height: 36,
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [AppTheme.accent, AppTheme.accent2],
                ),
                borderRadius: BorderRadius.circular(11),
              ),
              child: const Icon(Icons.smart_toy_rounded,
                  size: 19, color: Colors.white),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    _lang == 'ar' ? 'المساعد الذكي' : 'Smart Assistant',
                    style: GoogleFonts.tajawal(
                        fontWeight: FontWeight.w700, fontSize: 15),
                  ),
                  Row(
                    children: [
                      Container(
                        width: 7,
                        height: 7,
                        decoration: const BoxDecoration(
                          color: AppTheme.accent2,
                          shape: BoxShape.circle,
                        ),
                      ),
                      const SizedBox(width: 4),
                      Text(
                        _lang == 'ar' ? 'متصل الآن' : 'Online',
                        style: GoogleFonts.tajawal(
                          fontSize: 10,
                          color: AppTheme.accent2,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
        actions: [
          // Language toggle
          Container(
            margin: const EdgeInsets.only(left: 8),
            child: ActionChip(
              label: Text(
                _lang == 'ar' ? 'EN' : 'عربي',
                style: GoogleFonts.tajawal(
                  fontSize: 11,
                  fontWeight: FontWeight.w700,
                  color: AppTheme.accent,
                ),
              ),
              backgroundColor:
                  AppTheme.accentPale.withValues(alpha: isDark ? 0.15 : 1),
              side: BorderSide(color: AppTheme.accent.withValues(alpha: 0.2)),
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(16)),
              onPressed: _toggleLang,
              visualDensity: VisualDensity.compact,
            ),
          ),
          // Clear chat
          IconButton(
            icon: Icon(Icons.refresh_rounded,
                size: 20,
                color:
                    isDark ? AppTheme.darkTextMuted : AppTheme.lightTextMuted),
            onPressed: () {
              setState(() {
                _messages.clear();
                _messages.add(_ChatMsg(text: _data.greeting, isUser: false));
                _showQuickReplies = true;
              });
            },
            tooltip: _lang == 'ar' ? 'محادثة جديدة' : 'New chat',
          ),
        ],
      ),
      body: Column(
        children: [
          // Chat messages
          Expanded(
            child: ListView.builder(
              controller: _scrollController,
              padding: const EdgeInsets.fromLTRB(16, 12, 16, 8),
              itemCount: _messages.length +
                  (_typing ? 1 : 0) +
                  (_showQuickReplies ? 1 : 0),
              itemBuilder: (context, i) {
                if (i < _messages.length) {
                  return _buildBubble(_messages[i], isDark);
                }
                if (_typing && i == _messages.length) {
                  return _buildTypingIndicator(isDark);
                }
                if (_showQuickReplies) {
                  return _buildQuickReplies(isDark);
                }
                return const SizedBox.shrink();
              },
            ),
          ),
          // Input bar
          _buildInputBar(isDark),
        ],
      ),
    );
  }

  // ─── Quick reply chips ───
  Widget _buildQuickReplies(bool isDark) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12, top: 4),
      child: Wrap(
        spacing: 8,
        runSpacing: 8,
        children: _data.quickReplies
            .map((r) => ActionChip(
                  avatar: Icon(Icons.flash_on_rounded,
                      size: 14, color: AppTheme.accent),
                  label: Text(
                    r,
                    style: GoogleFonts.tajawal(
                      fontSize: 12,
                      color: AppTheme.accent,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  backgroundColor: isDark
                      ? AppTheme.accent.withValues(alpha: 0.08)
                      : AppTheme.accentPale,
                  side: BorderSide(
                      color: AppTheme.accent.withValues(alpha: 0.15)),
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20)),
                  onPressed: () => _send(r),
                ))
            .toList(),
      ),
    );
  }

  // ─── Chat bubble ───
  Widget _buildBubble(_ChatMsg msg, bool isDark) {
    final isUser = msg.isUser;
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Row(
        mainAxisAlignment:
            isUser ? MainAxisAlignment.start : MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          if (!isUser) ...[
            Container(
              width: 28,
              height: 28,
              margin: const EdgeInsets.only(left: 6),
              decoration: BoxDecoration(
                gradient:
                    LinearGradient(colors: [AppTheme.accent, AppTheme.accent2]),
                borderRadius: BorderRadius.circular(8),
              ),
              child: const Icon(Icons.smart_toy_rounded,
                  size: 14, color: Colors.white),
            ),
          ],
          Flexible(
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
              constraints: BoxConstraints(
                maxWidth: MediaQuery.of(context).size.width * 0.75,
              ),
              decoration: BoxDecoration(
                color: isUser
                    ? AppTheme.accent
                    : (isDark ? AppTheme.darkBgAlt : Colors.white),
                borderRadius: BorderRadius.only(
                  topLeft: const Radius.circular(18),
                  topRight: const Radius.circular(18),
                  bottomLeft: Radius.circular(isUser ? 4 : 18),
                  bottomRight: Radius.circular(isUser ? 18 : 4),
                ),
                border: isUser
                    ? null
                    : Border.all(
                        color: isDark ? Colors.white10 : AppTheme.lightBorder),
                boxShadow: [
                  BoxShadow(
                    color: (isUser ? AppTheme.accent : Colors.black)
                        .withValues(alpha: 0.08),
                    blurRadius: 8,
                    offset: const Offset(0, 2),
                  ),
                ],
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    msg.text,
                    style: GoogleFonts.tajawal(
                      fontSize: 14,
                      height: 1.7,
                      color: isUser
                          ? Colors.white
                          : (isDark ? AppTheme.darkText : AppTheme.lightText),
                    ),
                  ),
                  if (msg.hasLinks && !isUser)
                    Padding(
                      padding: const EdgeInsets.only(top: 8),
                      child: InkWell(
                        onTap: () => _launchUrl('https://wa.me/9647724596108'),
                        child: Container(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 12, vertical: 6),
                          decoration: BoxDecoration(
                            color:
                                const Color(0xFF25D366).withValues(alpha: 0.1),
                            borderRadius: BorderRadius.circular(8),
                            border: Border.all(
                                color: const Color(0xFF25D366)
                                    .withValues(alpha: 0.3)),
                          ),
                          child: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              const Icon(Icons.chat,
                                  size: 14, color: Color(0xFF25D366)),
                              const SizedBox(width: 6),
                              Text(
                                _lang == 'ar' ? 'فتح واتساب' : 'Open WhatsApp',
                                style: GoogleFonts.tajawal(
                                  fontSize: 12,
                                  fontWeight: FontWeight.w600,
                                  color: const Color(0xFF25D366),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                ],
              ),
            ),
          ),
          if (isUser) ...[
            Container(
              width: 28,
              height: 28,
              margin: const EdgeInsets.only(right: 6),
              decoration: BoxDecoration(
                color: AppTheme.accent.withValues(alpha: 0.15),
                borderRadius: BorderRadius.circular(8),
              ),
              child: const Icon(Icons.person, size: 14, color: AppTheme.accent),
            ),
          ],
        ],
      ),
    );
  }

  // ─── Typing dots animation ───
  Widget _buildTypingIndicator(bool isDark) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          Container(
            width: 28,
            height: 28,
            margin: const EdgeInsets.only(left: 6),
            decoration: BoxDecoration(
              gradient:
                  LinearGradient(colors: [AppTheme.accent, AppTheme.accent2]),
              borderRadius: BorderRadius.circular(8),
            ),
            child: const Icon(Icons.smart_toy_rounded,
                size: 14, color: Colors.white),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 14),
            decoration: BoxDecoration(
              color: isDark ? AppTheme.darkBgAlt : Colors.white,
              borderRadius: BorderRadius.circular(18),
              border: Border.all(
                  color: isDark ? Colors.white10 : AppTheme.lightBorder),
            ),
            child: _TypingDots(),
          ),
        ],
      ),
    );
  }

  // ─── Input bar ───
  Widget _buildInputBar(bool isDark) {
    return Container(
      padding: const EdgeInsets.fromLTRB(12, 10, 12, 16),
      decoration: BoxDecoration(
        color: isDark ? AppTheme.darkBg : Colors.white,
        border: Border(
            top: BorderSide(
                color: isDark ? Colors.white10 : AppTheme.lightBorder)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.04),
            blurRadius: 8,
            offset: const Offset(0, -2),
          ),
        ],
      ),
      child: SafeArea(
        top: false,
        child: Row(
          children: [
            Expanded(
              child: Container(
                decoration: BoxDecoration(
                  color: isDark ? AppTheme.darkBgAlt : AppTheme.lightBgAlt,
                  borderRadius: BorderRadius.circular(24),
                  border: Border.all(
                    color: isDark
                        ? Colors.white.withValues(alpha: 0.05)
                        : AppTheme.lightBorder,
                  ),
                ),
                child: TextField(
                  controller: _controller,
                  textInputAction: TextInputAction.send,
                  onSubmitted: _send,
                  style: GoogleFonts.tajawal(fontSize: 14),
                  textDirection:
                      _lang == 'ar' ? TextDirection.rtl : TextDirection.ltr,
                  decoration: InputDecoration(
                    hintText: _data.placeholder,
                    hintStyle: GoogleFonts.tajawal(
                      fontSize: 13,
                      color: isDark
                          ? AppTheme.darkTextMuted
                          : AppTheme.lightTextMuted,
                    ),
                    prefixIcon: Icon(
                      Icons.edit_rounded,
                      size: 18,
                      color: isDark
                          ? AppTheme.darkTextMuted
                          : AppTheme.lightTextMuted,
                    ),
                    contentPadding: const EdgeInsets.symmetric(
                        horizontal: 16, vertical: 12),
                    border: InputBorder.none,
                  ),
                ),
              ),
            ),
            const SizedBox(width: 8),
            Container(
              width: 46,
              height: 46,
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [AppTheme.accent, AppTheme.accentLight],
                ),
                borderRadius: BorderRadius.circular(23),
                boxShadow: [
                  BoxShadow(
                    color: AppTheme.accent.withValues(alpha: 0.3),
                    blurRadius: 8,
                    offset: const Offset(0, 2),
                  ),
                ],
              ),
              child: IconButton(
                icon: const Icon(Icons.send_rounded,
                    size: 19, color: Colors.white),
                onPressed: () => _send(_controller.text),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Future<void> _launchUrl(String url) async {
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    }
  }
}

// ─── Animated typing dots widget ───
class _TypingDots extends StatefulWidget {
  @override
  State<_TypingDots> createState() => _TypingDotsState();
}

class _TypingDotsState extends State<_TypingDots>
    with TickerProviderStateMixin {
  late final List<AnimationController> _controllers;

  @override
  void initState() {
    super.initState();
    _controllers = List.generate(3, (i) {
      final c = AnimationController(
        vsync: this,
        duration: const Duration(milliseconds: 500),
      );
      Future.delayed(Duration(milliseconds: i * 180), () {
        if (mounted) {
          c.repeat(reverse: true);
        }
      });
      return c;
    });
  }

  @override
  void dispose() {
    for (final c in _controllers) {
      c.dispose();
    }
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: List.generate(3, (i) {
        return AnimatedBuilder(
          animation: _controllers[i],
          builder: (_, __) {
            return Container(
              margin: EdgeInsets.only(left: i > 0 ? 5 : 0),
              width: 8,
              height: 8,
              decoration: BoxDecoration(
                color: AppTheme.accent.withValues(
                  alpha: 0.25 + 0.55 * _controllers[i].value,
                ),
                shape: BoxShape.circle,
              ),
            );
          },
        );
      }),
    );
  }
}
