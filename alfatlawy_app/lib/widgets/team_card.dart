import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../utils/app_theme.dart';

class TeamCard extends StatelessWidget {
  final String imageUrl;
  final String name;
  final String role;
  final bool fullWidth;
  const TeamCard({
    super.key,
    required this.imageUrl,
    required this.name,
    required this.role,
    this.fullWidth = false,
  });

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final card = Container(
      width: fullWidth ? double.infinity : 160,
      margin: fullWidth ? null : const EdgeInsets.only(left: 12),
      padding: const EdgeInsets.all(16),
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
      child: fullWidth
          ? Row(
              children: [
                _avatar(),
                const SizedBox(width: 14),
                Expanded(child: _text()),
              ],
            )
          : Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [_avatar(), const SizedBox(height: 12), _text()],
            ),
    );
    return card;
  }

  Widget _avatar() {
    return CircleAvatar(
      radius: 30,
      backgroundColor: AppTheme.accentPale,
      backgroundImage: NetworkImage(imageUrl),
      onBackgroundImageError: (_, __) {},
      child: const Icon(Icons.person, color: AppTheme.accent, size: 28),
    );
  }

  Widget _text() {
    return Column(
      crossAxisAlignment: fullWidth
          ? CrossAxisAlignment.start
          : CrossAxisAlignment.center,
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          name,
          textAlign: fullWidth ? null : TextAlign.center,
          style: GoogleFonts.tajawal(fontSize: 14, fontWeight: FontWeight.w700),
        ),
        const SizedBox(height: 3),
        Text(
          role,
          textAlign: fullWidth ? null : TextAlign.center,
          style: GoogleFonts.tajawal(
            fontSize: 11,
            color: AppTheme.accent,
            fontWeight: FontWeight.w600,
          ),
        ),
      ],
    );
  }
}
