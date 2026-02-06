import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Home, Calendar, Users, User, Menu, MapPin, Clock, Star, Award, Zap, Target, Trophy, MessageCircle, Bell, Search, QrCode, Check, X, Plus, ArrowRight, Play, Bookmark, Share2, Settings, LogOut, Camera, Edit3, Mail, Linkedin, Github, Filter, Send, Heart, TrendingUp, Gift, Lock, Unlock, ExternalLink, Wifi, Coffee, Map, Grid, List, ChevronDown, MoreHorizontal } from 'lucide-react';

// ============================================
// TALENT ARENA 365 - INTERACTIVE PROTOTYPE
// From Event to Ecosystem
// ============================================

// Brand Colors
const colors = {
  dark: '#0A0A0A',
  darkGray: '#1A1A1A',
  mediumGray: '#2A2A2A',
  lightGray: '#3A3A3A',
  yellow: '#E6F500',
  cyan: '#00D4E6',
  white: '#FFFFFF',
  textMuted: '#888888',
  success: '#22C55E',
  error: '#EF4444',
};

// Phone Frame Component
const PhoneFrame = ({ children, device = 'iphone' }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
    <div 
      className="relative bg-black rounded-[3rem] p-3 shadow-2xl"
      style={{ 
        width: '390px', 
        height: '844px',
        boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5), 0 30px 60px -30px rgba(0,212,230,0.3)'
      }}
    >
      {/* Dynamic Island */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-50" />
      
      {/* Screen */}
      <div 
        className="relative w-full h-full rounded-[2.5rem] overflow-hidden"
        style={{ backgroundColor: colors.dark }}
      >
        {children}
      </div>
    </div>
    
    {/* Navigation hint */}
    <p className="text-gray-500 text-sm mt-4 font-mono">Use navigation tabs to explore the app</p>
  </div>
);

// ============================================
// SPLASH & ONBOARDING SCREENS
// ============================================

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: colors.dark }}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: colors.cyan }} />
        <div className="absolute bottom-40 right-10 w-48 h-48 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: colors.yellow, animationDelay: '0.5s' }} />
      </div>
      
      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 
          className="text-5xl font-black italic tracking-tighter"
          style={{ color: colors.yellow, fontFamily: 'system-ui' }}
        >
          TALENT
        </h1>
        <h1 
          className="text-5xl font-black italic tracking-tighter -mt-2"
          style={{ color: colors.yellow, fontFamily: 'system-ui' }}
        >
          ARENA
        </h1>
        <div 
          className="mt-4 px-4 py-1 rounded-full text-xs font-bold tracking-widest"
          style={{ backgroundColor: colors.cyan, color: colors.dark }}
        >
          365
        </div>
      </div>
      
      {/* Loading indicator */}
      <div className="absolute bottom-32 flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ 
              backgroundColor: colors.cyan,
              animationDelay: `${i * 0.15}s`
            }}
          />
        ))}
      </div>
      
      <p className="absolute bottom-16 text-xs" style={{ color: colors.textMuted }}>
        From Event to Ecosystem
      </p>
    </div>
  );
};

const OnboardingScreen = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      icon: <Users size={64} />,
      title: 'COMMUNITY',
      subtitle: 'Year-round engagement',
      description: 'Connect with tech professionals, join regional meetups, and access exclusive educational partnerships.',
      color: colors.cyan,
    },
    {
      icon: <Zap size={64} />,
      title: 'CONNECTION',
      subtitle: 'AI-powered networking',
      description: 'Smart matchmaking that creates meaningful professional relationships beyond the event.',
      color: colors.yellow,
    },
    {
      icon: <Trophy size={64} />,
      title: 'COMPETITION',
      subtitle: 'Three anchor events',
      description: 'Gaming tournaments, robotics challenges, and hackathons that attract global talent.',
      color: colors.cyan,
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="h-full flex flex-col relative" style={{ backgroundColor: colors.dark }}>
      {/* Skip button */}
      <button 
        onClick={onComplete}
        className="absolute top-16 right-6 text-sm z-10"
        style={{ color: colors.textMuted }}
      >
        Skip
      </button>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Icon */}
        <div 
          className="w-32 h-32 rounded-3xl flex items-center justify-center mb-8"
          style={{ 
            backgroundColor: `${slide.color}20`,
            color: slide.color,
          }}
        >
          {slide.icon}
        </div>

        {/* Title */}
        <h2 
          className="text-3xl font-black tracking-tight mb-2"
          style={{ color: slide.color }}
        >
          {slide.title}
        </h2>
        <p className="text-lg mb-6" style={{ color: colors.white }}>
          {slide.subtitle}
        </p>
        <p className="text-center text-sm leading-relaxed" style={{ color: colors.textMuted }}>
          {slide.description}
        </p>
      </div>

      {/* Progress & Button */}
      <div className="px-8 pb-12">
        {/* Progress dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {slides.map((_, i) => (
            <div
              key={i}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === currentSlide ? '24px' : '8px',
                backgroundColor: i === currentSlide ? slide.color : colors.lightGray,
              }}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 transition-transform active:scale-98"
          style={{ backgroundColor: slide.color, color: colors.dark }}
        >
          <span>{currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

// ============================================
// MAIN APP SCREENS
// ============================================

const HomeScreen = ({ onNavigate, user }) => {
  const upcomingEvents = [
    { id: 1, name: 'Talent Arena 2027', date: 'Feb 24-26', type: 'main', color: colors.yellow },
    { id: 2, name: 'Gaming Summit', date: 'Mar 15-17', type: 'gaming', color: colors.cyan },
    { id: 3, name: 'Robotics Challenge', date: 'Aug 10-12', type: 'robotics', color: colors.yellow },
  ];

  const quickActions = [
    { icon: <QrCode size={24} />, label: 'Check-in', action: 'checkin' },
    { icon: <Map size={24} />, label: 'Map', action: 'map' },
    { icon: <Calendar size={24} />, label: 'Schedule', action: 'schedule' },
    { icon: <MessageCircle size={24} />, label: 'Connect', action: 'connect' },
  ];

  return (
    <div className="h-full overflow-y-auto pb-24" style={{ backgroundColor: colors.dark }}>
      {/* Header */}
      <div className="pt-16 px-6 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm" style={{ color: colors.textMuted }}>Welcome back,</p>
            <h1 className="text-2xl font-bold" style={{ color: colors.white }}>{user.name}</h1>
          </div>
          <div className="flex items-center space-x-3">
            <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.darkGray }}>
              <Bell size={20} style={{ color: colors.white }} />
              <div className="absolute w-2 h-2 rounded-full top-0 right-0" style={{ backgroundColor: colors.cyan }} />
            </button>
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
              style={{ backgroundColor: colors.yellow, color: colors.dark }}
            >
              {user.initials}
            </div>
          </div>
        </div>

        {/* Points Card */}
        <div 
          className="rounded-2xl p-5 relative overflow-hidden"
          style={{ backgroundColor: colors.darkGray }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30" style={{ backgroundColor: colors.cyan }} />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs mb-1" style={{ color: colors.textMuted }}>Your Points</p>
                <p className="text-3xl font-black" style={{ color: colors.white }}>2,450</p>
              </div>
              <div 
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ backgroundColor: colors.cyan, color: colors.dark }}
              >
                LEVEL 3
              </div>
            </div>
            <div className="w-full h-2 rounded-full" style={{ backgroundColor: colors.lightGray }}>
              <div className="h-full rounded-full" style={{ width: '65%', backgroundColor: colors.cyan }} />
            </div>
            <p className="text-xs mt-2" style={{ color: colors.textMuted }}>550 points to Level 4</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-8">
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action, i) => (
            <button
              key={i}
              onClick={() => onNavigate(action.action)}
              className="flex flex-col items-center py-4 rounded-2xl transition-transform active:scale-95"
              style={{ backgroundColor: colors.darkGray }}
            >
              <div style={{ color: colors.cyan }}>{action.icon}</div>
              <span className="text-xs mt-2" style={{ color: colors.white }}>{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="px-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold" style={{ color: colors.white }}>Upcoming Events</h2>
          <button className="text-sm" style={{ color: colors.cyan }}>View all</button>
        </div>
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <button
              key={event.id}
              onClick={() => onNavigate('eventDetail', event)}
              className="w-full p-4 rounded-2xl flex items-center justify-between transition-transform active:scale-98"
              style={{ backgroundColor: colors.darkGray }}
            >
              <div className="flex items-center space-x-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${event.color}20` }}
                >
                  {event.type === 'main' && <Star size={24} style={{ color: event.color }} />}
                  {event.type === 'gaming' && <Play size={24} style={{ color: event.color }} />}
                  {event.type === 'robotics' && <Target size={24} style={{ color: event.color }} />}
                </div>
                <div className="text-left">
                  <p className="font-semibold" style={{ color: colors.white }}>{event.name}</p>
                  <p className="text-sm" style={{ color: colors.textMuted }}>{event.date}</p>
                </div>
              </div>
              <ChevronRight size={20} style={{ color: colors.textMuted }} />
            </button>
          ))}
        </div>
      </div>

      {/* AI Match Suggestion */}
      <div className="px-6 mb-8">
        <h2 className="text-lg font-bold mb-4" style={{ color: colors.white }}>Suggested Connections</h2>
        <div 
          className="p-4 rounded-2xl border-2"
          style={{ backgroundColor: colors.darkGray, borderColor: colors.cyan }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div 
              className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold"
              style={{ backgroundColor: colors.mediumGray, color: colors.white }}
            >
              SC
            </div>
            <div className="flex-1">
              <p className="font-semibold" style={{ color: colors.white }}>Sarah Chen</p>
              <p className="text-sm" style={{ color: colors.textMuted }}>ML Engineer at Google</p>
            </div>
            <div 
              className="px-2 py-1 rounded-full text-xs font-bold"
              style={{ backgroundColor: `${colors.success}20`, color: colors.success }}
            >
              92% Match
            </div>
          </div>
          <div className="flex space-x-3">
            <button 
              className="flex-1 py-3 rounded-xl font-semibold text-sm"
              style={{ backgroundColor: colors.cyan, color: colors.dark }}
            >
              Connect
            </button>
            <button 
              className="flex-1 py-3 rounded-xl font-semibold text-sm"
              style={{ backgroundColor: colors.lightGray, color: colors.white }}
            >
              View Profile
            </button>
          </div>
        </div>
      </div>

      {/* Recent Badges */}
      <div className="px-6 mb-8">
        <h2 className="text-lg font-bold mb-4" style={{ color: colors.white }}>Recent Badges</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {['Networker', 'First Check-in', 'Early Bird'].map((badge, i) => (
            <div 
              key={i}
              className="flex-shrink-0 w-24 flex flex-col items-center p-4 rounded-2xl"
              style={{ backgroundColor: colors.darkGray }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                style={{ backgroundColor: i === 0 ? colors.cyan : colors.yellow, color: colors.dark }}
              >
                <Award size={24} />
              </div>
              <p className="text-xs text-center" style={{ color: colors.white }}>{badge}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EventsScreen = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const events = [
    {
      id: 1,
      name: 'Talent Arena 2027',
      subtitle: 'Main Event with MWC',
      date: 'February 24-26, 2027',
      location: 'Fira Barcelona Montjuïc',
      type: 'main',
      status: 'registered',
      image: colors.yellow,
    },
    {
      id: 2,
      name: 'Gaming Summit',
      subtitle: 'Esports & Tech Careers',
      date: 'March 15-17, 2027',
      location: 'Fira Barcelona',
      type: 'gaming',
      status: 'available',
      image: colors.cyan,
    },
    {
      id: 3,
      name: 'Robotics Challenge',
      subtitle: 'Engineering Competition',
      date: 'August 10-12, 2027',
      location: 'Fira Barcelona',
      type: 'robotics',
      status: 'available',
      image: colors.yellow,
    },
  ];

  return (
    <div className="h-full overflow-y-auto pb-24" style={{ backgroundColor: colors.dark }}>
      {/* Header */}
      <div className="pt-16 px-6 pb-4">
        <h1 className="text-2xl font-bold mb-4" style={{ color: colors.white }}>Events</h1>
        
        {/* Tabs */}
        <div className="flex space-x-2 p-1 rounded-xl" style={{ backgroundColor: colors.darkGray }}>
          {['upcoming', 'past', 'saved'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 py-2 rounded-lg text-sm font-medium capitalize transition-colors"
              style={{
                backgroundColor: activeTab === tab ? colors.cyan : 'transparent',
                color: activeTab === tab ? colors.dark : colors.textMuted,
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Event Cards */}
      <div className="px-6 space-y-4">
        {events.map((event) => (
          <button
            key={event.id}
            onClick={() => onNavigate('eventDetail', event)}
            className="w-full rounded-2xl overflow-hidden text-left transition-transform active:scale-98"
            style={{ backgroundColor: colors.darkGray }}
          >
            {/* Event Image/Banner */}
            <div 
              className="h-32 relative"
              style={{ backgroundColor: `${event.image}30` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {event.type === 'main' && <Star size={48} style={{ color: event.image }} />}
                {event.type === 'gaming' && <Play size={48} style={{ color: event.image }} />}
                {event.type === 'robotics' && <Target size={48} style={{ color: event.image }} />}
              </div>
              {event.status === 'registered' && (
                <div 
                  className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1"
                  style={{ backgroundColor: colors.success, color: colors.white }}
                >
                  <Check size={12} />
                  <span>Registered</span>
                </div>
              )}
            </div>
            
            {/* Event Info */}
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1" style={{ color: colors.white }}>{event.name}</h3>
              <p className="text-sm mb-3" style={{ color: colors.textMuted }}>{event.subtitle}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar size={14} style={{ color: colors.cyan }} />
                  <span className="text-xs" style={{ color: colors.textMuted }}>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={14} style={{ color: colors.cyan }} />
                  <span className="text-xs" style={{ color: colors.textMuted }}>{event.location}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Floating Action - Discover More */}
      <div className="px-6 mt-6">
        <button 
          className="w-full py-4 rounded-2xl font-bold flex items-center justify-center space-x-2"
          style={{ backgroundColor: colors.mediumGray, color: colors.cyan }}
        >
          <Search size={20} />
          <span>Discover More Events</span>
        </button>
      </div>
    </div>
  );
};

const EventDetailScreen = ({ event, onBack, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const schedule = [
    { time: '09:00', title: 'Opening Keynote', speaker: 'Tim Berners-Lee', type: 'keynote' },
    { time: '10:30', title: 'AI in Production', speaker: 'Sarah Chen', type: 'workshop' },
    { time: '12:00', title: 'Networking Lunch', speaker: '', type: 'networking' },
    { time: '14:00', title: 'Technical Challenge', speaker: 'Google', type: 'challenge' },
    { time: '16:00', title: 'Bug Bounty Session', speaker: 'CaixaBank', type: 'challenge' },
  ];

  return (
    <div className="h-full overflow-y-auto pb-24" style={{ backgroundColor: colors.dark }}>
      {/* Header with back button */}
      <div className="pt-12 px-4">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: colors.darkGray }}
        >
          <ChevronLeft size={24} style={{ color: colors.white }} />
        </button>
      </div>

      {/* Event Banner */}
      <div 
        className="mx-6 h-40 rounded-2xl relative overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: `${event?.image || colors.yellow}30` }}
      >
        <div className="text-center">
          <Star size={48} style={{ color: event?.image || colors.yellow }} />
        </div>
        <div 
          className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold"
          style={{ backgroundColor: colors.cyan, color: colors.dark }}
        >
          3 DAYS
        </div>
      </div>

      {/* Event Info */}
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold mb-2" style={{ color: colors.white }}>
          {event?.name || 'Talent Arena 2027'}
        </h1>
        <p className="mb-4" style={{ color: colors.textMuted }}>
          {event?.subtitle || 'Europe\'s premier digital talent gathering'}
        </p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Calendar size={16} style={{ color: colors.cyan }} />
            <span className="text-sm" style={{ color: colors.white }}>{event?.date || 'Feb 24-26, 2027'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} style={{ color: colors.cyan }} />
            <span className="text-sm" style={{ color: colors.white }}>{event?.location || 'Fira Barcelona'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users size={16} style={{ color: colors.cyan }} />
            <span className="text-sm" style={{ color: colors.white }}>20,000+ attendees</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mb-6">
          <button 
            className="flex-1 py-4 rounded-2xl font-bold"
            style={{ backgroundColor: colors.yellow, color: colors.dark }}
          >
            Get Tickets
          </button>
          <button 
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: colors.darkGray }}
          >
            <Bookmark size={24} style={{ color: colors.white }} />
          </button>
          <button 
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: colors.darkGray }}
          >
            <Share2 size={24} style={{ color: colors.white }} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 mb-4">
        <div className="flex space-x-4 border-b" style={{ borderColor: colors.lightGray }}>
          {['overview', 'schedule', 'speakers', 'map'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="pb-3 text-sm font-medium capitalize"
              style={{
                color: activeTab === tab ? colors.cyan : colors.textMuted,
                borderBottom: activeTab === tab ? `2px solid ${colors.cyan}` : 'none',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="px-6">
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { num: '200+', label: 'Presentations' },
              { num: '500+', label: 'Hackathon participants' },
              { num: '20K+', label: 'AI-matched meetings' },
              { num: '50+', label: 'Mentors' },
            ].map((stat, i) => (
              <div 
                key={i}
                className="p-4 rounded-2xl text-center"
                style={{ backgroundColor: colors.darkGray }}
              >
                <p className="text-2xl font-black" style={{ color: colors.cyan }}>{stat.num}</p>
                <p className="text-xs" style={{ color: colors.textMuted }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <h3 className="font-bold mb-3" style={{ color: colors.white }}>Highlights</h3>
          <div className="space-y-3">
            {['30-Min Technical Challenges', 'Bug Bounty Sessions', 'Live Hackathons', 'AI Networking'].map((item, i) => (
              <div 
                key={i}
                className="p-4 rounded-xl flex items-center space-x-3"
                style={{ backgroundColor: colors.darkGray }}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${colors.cyan}20` }}
                >
                  <Zap size={20} style={{ color: colors.cyan }} />
                </div>
                <span style={{ color: colors.white }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'schedule' && (
        <div className="px-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold" style={{ color: colors.white }}>Day 1 - Feb 24</h3>
            <button className="flex items-center space-x-1 text-sm" style={{ color: colors.cyan }}>
              <Filter size={14} />
              <span>Filter</span>
            </button>
          </div>
          <div className="space-y-3">
            {schedule.map((item, i) => (
              <div 
                key={i}
                className="p-4 rounded-xl flex items-start space-x-4"
                style={{ backgroundColor: colors.darkGray }}
              >
                <div className="text-center">
                  <p className="text-sm font-mono" style={{ color: colors.cyan }}>{item.time}</p>
                </div>
                <div className="flex-1">
                  <p className="font-semibold mb-1" style={{ color: colors.white }}>{item.title}</p>
                  {item.speaker && (
                    <p className="text-sm" style={{ color: colors.textMuted }}>{item.speaker}</p>
                  )}
                </div>
                <div 
                  className="px-2 py-1 rounded-full text-xs"
                  style={{ 
                    backgroundColor: item.type === 'keynote' ? `${colors.yellow}20` : 
                                     item.type === 'challenge' ? `${colors.cyan}20` : 
                                     `${colors.lightGray}`,
                    color: item.type === 'keynote' ? colors.yellow : 
                           item.type === 'challenge' ? colors.cyan : 
                           colors.textMuted
                  }}
                >
                  {item.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ConnectScreen = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('matches');
  
  const matches = [
    { id: 1, name: 'Sarah Chen', role: 'ML Engineer', company: 'Google', match: 92, initials: 'SC' },
    { id: 2, name: 'Alex Rivera', role: 'Product Manager', company: 'Meta', match: 88, initials: 'AR' },
    { id: 3, name: 'Emma Wilson', role: 'Data Scientist', company: 'Spotify', match: 85, initials: 'EW' },
    { id: 4, name: 'Marcus Johnson', role: 'DevOps Engineer', company: 'AWS', match: 82, initials: 'MJ' },
  ];

  const messages = [
    { id: 1, name: 'Sarah Chen', lastMessage: 'Looking forward to meeting!', time: '2m', unread: true },
    { id: 2, name: 'Alex Rivera', lastMessage: 'Great connecting yesterday', time: '1h', unread: false },
  ];

  return (
    <div className="h-full overflow-y-auto pb-24" style={{ backgroundColor: colors.dark }}>
      {/* Header */}
      <div className="pt-16 px-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold" style={{ color: colors.white }}>Connect</h1>
          <button 
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: colors.darkGray }}
          >
            <Search size={20} style={{ color: colors.white }} />
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex space-x-2 p-1 rounded-xl" style={{ backgroundColor: colors.darkGray }}>
          {['matches', 'messages', 'meetings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 py-2 rounded-lg text-sm font-medium capitalize transition-colors"
              style={{
                backgroundColor: activeTab === tab ? colors.cyan : 'transparent',
                color: activeTab === tab ? colors.dark : colors.textMuted,
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'matches' && (
        <div className="px-6">
          {/* AI Banner */}
          <div 
            className="p-4 rounded-2xl mb-6 flex items-center space-x-4"
            style={{ backgroundColor: `${colors.cyan}15`, border: `1px solid ${colors.cyan}30` }}
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: colors.cyan }}
            >
              <Zap size={24} style={{ color: colors.dark }} />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm" style={{ color: colors.white }}>AI Matchmaking Active</p>
              <p className="text-xs" style={{ color: colors.textMuted }}>4 new matches based on your profile</p>
            </div>
          </div>

          {/* Match Cards */}
          <h3 className="font-bold mb-4" style={{ color: colors.white }}>Suggested for You</h3>
          <div className="space-y-3">
            {matches.map((person) => (
              <div 
                key={person.id}
                className="p-4 rounded-2xl"
                style={{ backgroundColor: colors.darkGray }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold"
                    style={{ backgroundColor: colors.mediumGray, color: colors.white }}
                  >
                    {person.initials}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold" style={{ color: colors.white }}>{person.name}</p>
                    <p className="text-sm" style={{ color: colors.textMuted }}>{person.role} at {person.company}</p>
                  </div>
                  <div 
                    className="px-2 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: `${colors.success}20`, color: colors.success }}
                  >
                    {person.match}%
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button 
                    className="flex-1 py-2 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2"
                    style={{ backgroundColor: colors.cyan, color: colors.dark }}
                  >
                    <MessageCircle size={16} />
                    <span>Message</span>
                  </button>
                  <button 
                    className="flex-1 py-2 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2"
                    style={{ backgroundColor: colors.lightGray, color: colors.white }}
                  >
                    <Calendar size={16} />
                    <span>Schedule</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'messages' && (
        <div className="px-6">
          <div className="space-y-2">
            {messages.map((msg) => (
              <button
                key={msg.id}
                className="w-full p-4 rounded-2xl flex items-center space-x-4 text-left"
                style={{ backgroundColor: colors.darkGray }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: colors.mediumGray, color: colors.white }}
                >
                  {msg.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold" style={{ color: colors.white }}>{msg.name}</p>
                    <span className="text-xs" style={{ color: colors.textMuted }}>{msg.time}</span>
                  </div>
                  <p className="text-sm truncate" style={{ color: msg.unread ? colors.white : colors.textMuted }}>
                    {msg.lastMessage}
                  </p>
                </div>
                {msg.unread && (
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.cyan }} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'meetings' && (
        <div className="px-6">
          <div 
            className="p-4 rounded-2xl mb-4"
            style={{ backgroundColor: colors.darkGray }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold" style={{ color: colors.white }}>Today, 2:30 PM</p>
              <div 
                className="px-2 py-1 rounded-full text-xs"
                style={{ backgroundColor: `${colors.success}20`, color: colors.success }}
              >
                Confirmed
              </div>
            </div>
            <p className="text-sm mb-3" style={{ color: colors.textMuted }}>Meeting with Sarah Chen</p>
            <div className="flex items-center space-x-2 text-sm" style={{ color: colors.cyan }}>
              <MapPin size={14} />
              <span>VIP Lounge, Table 12</span>
            </div>
          </div>
          
          <button 
            className="w-full py-4 rounded-2xl font-bold flex items-center justify-center space-x-2"
            style={{ backgroundColor: colors.cyan, color: colors.dark }}
          >
            <Plus size={20} />
            <span>Schedule New Meeting</span>
          </button>
        </div>
      )}
    </div>
  );
};

const ProfileScreen = ({ user, onNavigate }) => {
  const badges = [
    { name: 'Networker', icon: <Users size={20} />, earned: true },
    { name: 'First Check-in', icon: <Check size={20} />, earned: true },
    { name: 'Early Bird', icon: <Clock size={20} />, earned: true },
    { name: 'Bug Hunter', icon: <Target size={20} />, earned: false },
    { name: 'Hackathon Star', icon: <Trophy size={20} />, earned: false },
    { name: 'Mentor', icon: <Award size={20} />, earned: false },
  ];

  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'Machine Learning', 'Cloud Computing'];

  return (
    <div className="h-full overflow-y-auto pb-24" style={{ backgroundColor: colors.dark }}>
      {/* Header */}
      <div className="pt-16 px-6 pb-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold" style={{ color: colors.white }}>Profile</h1>
          <button 
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: colors.darkGray }}
          >
            <Settings size={20} style={{ color: colors.white }} />
          </button>
        </div>

        {/* Profile Card */}
        <div 
          className="rounded-2xl p-6 relative overflow-hidden"
          style={{ backgroundColor: colors.darkGray }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20" style={{ backgroundColor: colors.yellow }} />
          
          <div className="relative z-10 flex items-center space-x-4 mb-4">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold"
              style={{ backgroundColor: colors.yellow, color: colors.dark }}
            >
              {user.initials}
            </div>
            <div>
              <h2 className="text-xl font-bold" style={{ color: colors.white }}>{user.name}</h2>
              <p style={{ color: colors.textMuted }}>{user.role}</p>
              <p className="text-sm" style={{ color: colors.cyan }}>{user.company}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <MapPin size={14} style={{ color: colors.textMuted }} />
              <span className="text-sm" style={{ color: colors.textMuted }}>Barcelona, Spain</span>
            </div>
          </div>

          <div className="flex space-x-3">
            <button 
              className="flex-1 py-3 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2"
              style={{ backgroundColor: colors.yellow, color: colors.dark }}
            >
              <Edit3 size={16} />
              <span>Edit Profile</span>
            </button>
            <button 
              className="py-3 px-4 rounded-xl"
              style={{ backgroundColor: colors.lightGray }}
            >
              <QrCode size={20} style={{ color: colors.white }} />
            </button>
            <button 
              className="py-3 px-4 rounded-xl"
              style={{ backgroundColor: colors.lightGray }}
            >
              <Share2 size={20} style={{ color: colors.white }} />
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { num: '2,450', label: 'Points' },
            { num: '12', label: 'Connections' },
            { num: '3', label: 'Badges' },
          ].map((stat, i) => (
            <div 
              key={i}
              className="p-4 rounded-2xl text-center"
              style={{ backgroundColor: colors.darkGray }}
            >
              <p className="text-xl font-bold" style={{ color: colors.cyan }}>{stat.num}</p>
              <p className="text-xs" style={{ color: colors.textMuted }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="px-6 mb-6">
        <h3 className="font-bold mb-3" style={{ color: colors.white }}>Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span 
              key={i}
              className="px-3 py-2 rounded-full text-sm"
              style={{ backgroundColor: colors.darkGray, color: colors.white }}
            >
              {skill}
            </span>
          ))}
          <button 
            className="px-3 py-2 rounded-full text-sm flex items-center space-x-1"
            style={{ backgroundColor: `${colors.cyan}20`, color: colors.cyan }}
          >
            <Plus size={14} />
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* Badges */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold" style={{ color: colors.white }}>Badges</h3>
          <button className="text-sm" style={{ color: colors.cyan }}>View all</button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {badges.map((badge, i) => (
            <div 
              key={i}
              className="p-4 rounded-2xl flex flex-col items-center"
              style={{ 
                backgroundColor: colors.darkGray,
                opacity: badge.earned ? 1 : 0.5,
              }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                style={{ 
                  backgroundColor: badge.earned ? colors.cyan : colors.lightGray, 
                  color: badge.earned ? colors.dark : colors.textMuted 
                }}
              >
                {badge.icon}
              </div>
              <p className="text-xs text-center" style={{ color: badge.earned ? colors.white : colors.textMuted }}>
                {badge.name}
              </p>
              {!badge.earned && (
                <Lock size={10} style={{ color: colors.textMuted }} className="mt-1" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="px-6 mb-6">
        <h3 className="font-bold mb-3" style={{ color: colors.white }}>Connect</h3>
        <div className="flex space-x-3">
          {[
            { icon: <Linkedin size={20} />, connected: true },
            { icon: <Github size={20} />, connected: true },
            { icon: <Mail size={20} />, connected: false },
          ].map((social, i) => (
            <button 
              key={i}
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ 
                backgroundColor: social.connected ? colors.cyan : colors.darkGray,
                color: social.connected ? colors.dark : colors.textMuted,
              }}
            >
              {social.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const MoreScreen = ({ onNavigate }) => {
  const menuItems = [
    { icon: <Gift size={20} />, label: 'Rewards & Benefits', badge: 'NEW' },
    { icon: <TrendingUp size={20} />, label: 'Leaderboard' },
    { icon: <Calendar size={20} />, label: 'Webinars' },
    { icon: <Users size={20} />, label: 'Meetups' },
    { icon: <Award size={20} />, label: 'Certifications' },
    { icon: <Coffee size={20} />, label: 'Mentoring' },
  ];

  const settingsItems = [
    { icon: <Bell size={20} />, label: 'Notifications' },
    { icon: <Lock size={20} />, label: 'Privacy' },
    { icon: <Settings size={20} />, label: 'Settings' },
    { icon: <ExternalLink size={20} />, label: 'Help & Support' },
  ];

  return (
    <div className="h-full overflow-y-auto pb-24" style={{ backgroundColor: colors.dark }}>
      {/* Header */}
      <div className="pt-16 px-6 pb-6">
        <h1 className="text-2xl font-bold" style={{ color: colors.white }}>More</h1>
      </div>

      {/* Resources Section */}
      <div className="px-6 mb-6">
        <h3 className="text-sm font-semibold mb-3" style={{ color: colors.textMuted }}>RESOURCES</h3>
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: colors.darkGray }}>
          {menuItems.map((item, i) => (
            <button
              key={i}
              className="w-full p-4 flex items-center justify-between border-b last:border-b-0"
              style={{ borderColor: colors.lightGray }}
            >
              <div className="flex items-center space-x-3">
                <div style={{ color: colors.cyan }}>{item.icon}</div>
                <span style={{ color: colors.white }}>{item.label}</span>
              </div>
              <div className="flex items-center space-x-2">
                {item.badge && (
                  <span 
                    className="px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{ backgroundColor: colors.yellow, color: colors.dark }}
                  >
                    {item.badge}
                  </span>
                )}
                <ChevronRight size={16} style={{ color: colors.textMuted }} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Settings Section */}
      <div className="px-6 mb-6">
        <h3 className="text-sm font-semibold mb-3" style={{ color: colors.textMuted }}>SETTINGS</h3>
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: colors.darkGray }}>
          {settingsItems.map((item, i) => (
            <button
              key={i}
              className="w-full p-4 flex items-center justify-between border-b last:border-b-0"
              style={{ borderColor: colors.lightGray }}
            >
              <div className="flex items-center space-x-3">
                <div style={{ color: colors.textMuted }}>{item.icon}</div>
                <span style={{ color: colors.white }}>{item.label}</span>
              </div>
              <ChevronRight size={16} style={{ color: colors.textMuted }} />
            </button>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="px-6">
        <button 
          className="w-full p-4 rounded-2xl flex items-center justify-center space-x-2"
          style={{ backgroundColor: colors.darkGray }}
        >
          <LogOut size={20} style={{ color: colors.error }} />
          <span style={{ color: colors.error }}>Log Out</span>
        </button>
      </div>

      {/* Version */}
      <p className="text-center text-xs mt-6" style={{ color: colors.textMuted }}>
        Talent Arena 365 v1.0.0
      </p>
    </div>
  );
};

// ============================================
// BOTTOM NAVIGATION
// ============================================

const BottomNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', icon: <Home size={24} />, label: 'Home' },
    { id: 'events', icon: <Calendar size={24} />, label: 'Events' },
    { id: 'connect', icon: <Users size={24} />, label: 'Connect' },
    { id: 'profile', icon: <User size={24} />, label: 'Profile' },
    { id: 'more', icon: <Menu size={24} />, label: 'More' },
  ];

  return (
    <div 
      className="absolute bottom-0 left-0 right-0 flex justify-around items-center py-4 px-2"
      style={{ backgroundColor: colors.darkGray, borderTop: `1px solid ${colors.lightGray}` }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className="flex flex-col items-center space-y-1 px-3"
        >
          <div style={{ color: activeTab === tab.id ? colors.cyan : colors.textMuted }}>
            {tab.icon}
          </div>
          <span 
            className="text-xs"
            style={{ color: activeTab === tab.id ? colors.cyan : colors.textMuted }}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
};

// ============================================
// MAIN APP COMPONENT
// ============================================

export default function TalentArena365App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [activeTab, setActiveTab] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const user = {
    name: 'Alex Martinez',
    initials: 'AM',
    role: 'Software Engineer',
    company: 'TechCorp Barcelona',
  };

  const handleNavigate = (screen, data) => {
    if (screen === 'eventDetail') {
      setSelectedEvent(data);
      setCurrentScreen('eventDetail');
    } else {
      setCurrentScreen(screen);
    }
  };

  const handleBack = () => {
    setCurrentScreen('main');
  };

  const handleOnboardingComplete = () => {
    setCurrentScreen('main');
  };

  const renderScreen = () => {
    if (currentScreen === 'splash') {
      return <SplashScreen onComplete={() => setCurrentScreen('onboarding')} />;
    }

    if (currentScreen === 'onboarding') {
      return <OnboardingScreen onComplete={handleOnboardingComplete} />;
    }

    if (currentScreen === 'eventDetail') {
      return <EventDetailScreen event={selectedEvent} onBack={handleBack} onNavigate={handleNavigate} />;
    }

    // Main app with bottom nav
    return (
      <>
        {activeTab === 'home' && <HomeScreen onNavigate={handleNavigate} user={user} />}
        {activeTab === 'events' && <EventsScreen onNavigate={handleNavigate} />}
        {activeTab === 'connect' && <ConnectScreen onNavigate={handleNavigate} />}
        {activeTab === 'profile' && <ProfileScreen user={user} onNavigate={handleNavigate} />}
        {activeTab === 'more' && <MoreScreen onNavigate={handleNavigate} />}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </>
    );
  };

  return (
    <PhoneFrame>
      {renderScreen()}
    </PhoneFrame>
  );
}
