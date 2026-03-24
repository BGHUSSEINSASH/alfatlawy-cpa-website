import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'home_screen.dart';
import 'services_screen.dart';
import 'chatbot_screen.dart';
import 'about_screen.dart';
import 'contact_screen.dart';

class MainNavigation extends StatefulWidget {
  final VoidCallback onToggleTheme;
  const MainNavigation({super.key, required this.onToggleTheme});

  @override
  State<MainNavigation> createState() => _MainNavigationState();
}

class _MainNavigationState extends State<MainNavigation> {
  int _currentIndex = 0;

  late final List<Widget> _screens;

  void _goToTab(int index) {
    setState(() => _currentIndex = index);
  }

  @override
  void initState() {
    super.initState();
    _screens = [
      HomeScreen(onToggleTheme: widget.onToggleTheme, onNavigateTab: _goToTab),
      const ServicesScreen(),
      const ChatbotScreen(),
      const AboutScreen(),
      const ContactScreen(),
    ];
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(index: _currentIndex, children: _screens),
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          border: Border(
            top: BorderSide(color: Theme.of(context).dividerColor, width: 0.5),
          ),
        ),
        child: BottomNavigationBar(
          currentIndex: _currentIndex,
          onTap: (i) => setState(() => _currentIndex = i),
          selectedFontSize: 11,
          unselectedFontSize: 10,
          items: const [
            BottomNavigationBarItem(
              icon: Icon(Icons.home_outlined),
              activeIcon: Icon(Icons.home),
              label: 'الرئيسية',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.grid_view_outlined),
              activeIcon: Icon(Icons.grid_view),
              label: 'خدماتنا',
            ),
            BottomNavigationBarItem(
              icon: FaIcon(FontAwesomeIcons.robot, size: 20),
              activeIcon: FaIcon(FontAwesomeIcons.robot, size: 20),
              label: 'المساعد',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.info_outline),
              activeIcon: Icon(Icons.info),
              label: 'من نحن',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.mail_outline),
              activeIcon: Icon(Icons.mail),
              label: 'تواصل',
            ),
          ],
        ),
      ),
    );
  }
}
