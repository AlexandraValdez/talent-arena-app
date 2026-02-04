import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Home, Calendar, Users, User, Menu, MapPin, Clock, Star, Award, Zap, Target, Trophy, MessageCircle, Bell, Search, QrCode, Check, X, Plus, ArrowRight, Play, Bookmark, Share2, Settings, LogOut, Camera, Edit3, Mail, Linkedin, Github, Filter, Send, Heart, TrendingUp, Gift, Lock, Unlock, ExternalLink, Wifi, Coffee, Map, Grid, List, ChevronDown, MoreHorizontal, CreditCard, Timer, AlertCircle, Shield, Bug, Code, Cpu, Gamepad2, Bot, Rocket, Crown, Medal, Flame } from 'lucide-react';

// ============================================
// TALENT ARENA 365 - EXTENDED PROTOTYPE
// Additional Screens: Challenges, Gamification, Tickets
// ============================================

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
  warning: '#F59E0B',
  purple: '#A855F7',
};

// ============================================
// TICKET PURCHASE FLOW
// ============================================

const TicketSelectionScreen = ({ onBack, onSelect }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  
  const tickets = [
    {
      id: 'general',
      name: 'GENERAL',
      price: 'FREE',
      color: colors.white,
      features: [
        'Access to free event zones',
        'Inspiring keynotes',
        'Workshops',
        'Immersive tech experiences',
      ],
    },
    {
      id: 'xpro',
      name: 'XPRO',
      price: '€149',
      originalPrice: '€199',
      color: colors.cyan,
      badge: 'EARLY BIRD',
      features: [
        'All General access',
        'Exclusive PRO keynotes',
        'Advanced workshops',
        'VIP networking lounge',
        'Priority seating',
        'Digital certificate',
      ],
    },
  ];

  return (
    <div className="h-full overflow-y-auto pb-8" style={{ backgroundColor: colors.dark }}>
      <div className="pt-12 px-4">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: colors.darkGray }}
        >
          <ChevronLeft size={24} style={{ color: colors.white }} />
        </button>
      </div>

      <div className="px-6">
        <h1 className="text-2xl font-bold mb-2" style={{ color: colors.white }}>Get Your Pass</h1>
        <p className="mb-6" style={{ color: colors.textMuted }}>Talent Arena 2027 • Feb 24-26</p>

        <div className="space-y-4 mb-8">
          {tickets.map((ticket) => (
            <button
              key={ticket.id}
              onClick={() => setSelectedTicket(ticket.id)}
              className="w-full p-5 rounded-2xl text-left transition-all"
              style={{ 
                backgroundColor: colors.darkGray,
                border: selectedTicket === ticket.id ? `2px solid ${ticket.color}` : '2px solid transparent',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-black" style={{ color: ticket.color }}>
                      {ticket.name}
                    </h3>
                    {ticket.badge && (
                      <span 
                        className="px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{ backgroundColor: colors.yellow, color: colors.dark }}
                      >
                        {ticket.badge}
                      </span>
                    )}
                  </div>
                  {ticket.originalPrice && (
                    <span className="text-sm line-through" style={{ color: colors.textMuted }}>
                      {ticket.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-2xl font-bold" style={{ color: colors.white }}>{ticket.price}</p>
              </div>

              <div className="space-y-2">
                {ticket.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Check size={14} style={{ color: colors.success }} />
                    <span className="text-sm" style={{ color: colors.white }}>{feature}</span>
                  </div>
                ))}
              </div>

              <div 
                className="mt-4 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                style={{ 
                  borderColor: ticket.color,
                  backgroundColor: selectedTicket === ticket.id ? ticket.color : 'transparent',
                }}
              >
                {selectedTicket === ticket.id && <Check size={14} style={{ color: colors.dark }} />}
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => onSelect(selectedTicket)}
          disabled={!selectedTicket}
          className="w-full py-4 rounded-2xl font-bold text-lg"
          style={{ 
            backgroundColor: selectedTicket ? colors.yellow : colors.lightGray, 
            color: colors.dark,
            opacity: selectedTicket ? 1 : 0.5,
          }}
        >
          Continue to Checkout
        </button>

        <p className="text-center text-xs mt-4" style={{ color: colors.textMuted }}>
          Registration includes free access to MWC Barcelona on March 5
        </p>
      </div>
    </div>
  );
};

const TicketConfirmationScreen = ({ onClose }) => {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: colors.dark }}>
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: `${colors.success}20` }}
        >
          <Check size={48} style={{ color: colors.success }} />
        </div>
        
        <h1 className="text-2xl font-bold mb-2 text-center" style={{ color: colors.white }}>
          You're In!
        </h1>
        <p className="text-center mb-8" style={{ color: colors.textMuted }}>
          Your pass has been confirmed
        </p>

        <div 
          className="w-full rounded-3xl p-6 relative overflow-hidden"
          style={{ backgroundColor: colors.darkGray, border: `2px solid ${colors.cyan}` }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ backgroundColor: colors.cyan }} />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-black italic" style={{ color: colors.yellow }}>
                  TALENT ARENA
                </h2>
                <p className="text-sm" style={{ color: colors.textMuted }}>2027</p>
              </div>
              <div 
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ backgroundColor: colors.cyan, color: colors.dark }}
              >
                XPRO
              </div>
            </div>

            <div className="mb-4">
              <p className="text-lg font-semibold" style={{ color: colors.white }}>Alex Martinez</p>
              <p className="text-sm" style={{ color: colors.textMuted }}>Software Engineer</p>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs" style={{ color: colors.textMuted }}>Date</p>
                <p className="text-sm font-semibold" style={{ color: colors.white }}>Feb 24-26, 2027</p>
              </div>
              <div>
                <p className="text-xs" style={{ color: colors.textMuted }}>Location</p>
                <p className="text-sm font-semibold" style={{ color: colors.white }}>Fira Montjuïc</p>
              </div>
            </div>

            <div 
              className="w-full h-32 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: colors.white }}
            >
              <QrCode size={80} style={{ color: colors.dark }} />
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-8">
        <button
          onClick={onClose}
          className="w-full py-4 rounded-2xl font-bold mb-3"
          style={{ backgroundColor: colors.cyan, color: colors.dark }}
        >
          Add to Wallet
        </button>
        <button
          onClick={onClose}
          className="w-full py-4 rounded-2xl font-bold"
          style={{ backgroundColor: colors.darkGray, color: colors.white }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

// ============================================
// TECHNICAL CHALLENGE FLOW
// ============================================

const ChallengesListScreen = ({ onBack, onSelect }) => {
  const challenges = [
    {
      id: 1,
      company: 'Google',
      title: '30-Min Technical Challenge',
      type: 'coding',
      difficulty: 'Intermediate',
      participants: 234,
      reward: 'Interview Fast-Track',
      time: '30 min',
      status: 'available',
      icon: <Code size={24} />,
      color: colors.cyan,
    },
    {
      id: 2,
      company: 'CaixaBank',
      title: 'Bug Bounty Session',
      type: 'security',
      difficulty: 'Advanced',
      participants: 156,
      reward: '€500 Prize Pool',
      time: '60 min',
      status: 'available',
      icon: <Bug size={24} />,
      color: colors.yellow,
    },
    {
      id: 3,
      company: 'Schneider Electric',
      title: 'IoT Innovation Challenge',
      type: 'hardware',
      difficulty: 'All Levels',
      participants: 89,
      reward: 'Mentorship Program',
      time: '2 hours',
      status: 'starting_soon',
      icon: <Cpu size={24} />,
      color: colors.purple,
    },
    {
      id: 4,
      company: 'Allianz',
      title: 'Data Science Sprint',
      type: 'data',
      difficulty: 'Advanced',
      participants: 178,
      reward: 'Job Interview',
      time: '45 min',
      status: 'completed',
      icon: <TrendingUp size={24} />,
      color: colors.success,
    },
  ];

  return (
    <div className="h-full overflow-y-auto pb-24" style={{ backgroundColor: colors.dark }}>
      <div className="pt-12 px-4">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: colors.darkGray }}
        >
          <ChevronLeft size={24} style={{ color: colors.white }} />
        </button>
      </div>

      <div className="px-6">
        <h1 className="text-2xl font-bold mb-2" style={{ color: colors.white }}>Challenges</h1>
        <p className="mb-6" style={{ color: colors.textMuted }}>Compete, learn, and get hired</p>

        <div className="flex space-x-2 overflow-x-auto pb-4 mb-4">
          {['All', 'Coding', 'Security', 'Data', 'Hardware'].map((filter, i) => (
            <button
              key={i}
              className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"
              style={{ 
                backgroundColor: i === 0 ? colors.cyan : colors.darkGray,
                color: i === 0 ? colors.dark : colors.white,
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {challenges.map((challenge) => (
            <button
              key={challenge.id}
              onClick={() => onSelect(challenge)}
              className="w-full p-4 rounded-2xl text-left transition-transform active:scale-98"
              style={{ 
                backgroundColor: colors.darkGray,
                opacity: challenge.status === 'completed' ? 0.6 : 1,
              }}
            >
              <div className="flex items-start space-x-4">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${challenge.color}20` }}
                >
                  <div style={{ color: challenge.color }}>{challenge.icon}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-semibold" style={{ color: challenge.color }}>
                      {challenge.company}
                    </span>
                    {challenge.status === 'starting_soon' && (
                      <span 
                        className="px-2 py-0.5 rounded-full text-xs font-bold animate-pulse"
                        style={{ backgroundColor: colors.warning, color: colors.dark }}
                      >
                        Starting Soon
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: colors.white }}>
                    {challenge.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-xs" style={{ color: colors.textMuted }}>
                    <span className="flex items-center space-x-1">
                      <Timer size={12} />
                      <span>{challenge.time}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users size={12} />
                      <span>{challenge.participants}</span>
                    </span>
                    <span>{challenge.difficulty}</span>
                  </div>
                </div>
              </div>
              
              <div 
                className="mt-3 p-2 rounded-lg flex items-center justify-between"
                style={{ backgroundColor: colors.mediumGray }}
              >
                <div className="flex items-center space-x-2">
                  <Trophy size={14} style={{ color: colors.yellow }} />
                  <span className="text-sm" style={{ color: colors.white }}>{challenge.reward}</span>
                </div>
                <ChevronRight size={16} style={{ color: colors.textMuted }} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ChallengeDetailScreen = ({ challenge, onBack, onStart }) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="h-full overflow-y-auto pb-8" style={{ backgroundColor: colors.dark }}>
      <div className="pt-12 px-4">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: colors.darkGray }}
        >
          <ChevronLeft size={24} style={{ color: colors.white }} />
        </button>
      </div>

      <div className="px-6">
        <div 
          className="inline-flex items-center space-x-2 px-3 py-2 rounded-full mb-4"
          style={{ backgroundColor: colors.darkGray }}
        >
          <div 
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ backgroundColor: colors.cyan }}
          >
            <Code size={14} style={{ color: colors.dark }} />
          </div>
          <span className="text-sm font-semibold" style={{ color: colors.cyan }}>
            {challenge?.company || 'Google'}
          </span>
        </div>

        <h1 className="text-2xl font-bold mb-2" style={{ color: colors.white }}>
          {challenge?.title || '30-Min Technical Challenge'}
        </h1>
        <p className="mb-6" style={{ color: colors.textMuted }}>
          Complete this coding challenge to win a one-on-one meeting with our recruiting team
        </p>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { icon: <Timer size={20} />, value: '30 min', label: 'Duration' },
            { icon: <Users size={20} />, value: '234', label: 'Participants' },
            { icon: <Target size={20} />, value: 'Medium', label: 'Difficulty' },
          ].map((stat, i) => (
            <div 
              key={i}
              className="p-4 rounded-xl text-center"
              style={{ backgroundColor: colors.darkGray }}
            >
              <div className="flex justify-center mb-2" style={{ color: colors.cyan }}>{stat.icon}</div>
              <p className="font-bold" style={{ color: colors.white }}>{stat.value}</p>
              <p className="text-xs" style={{ color: colors.textMuted }}>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-3" style={{ color: colors.white }}>Requirements</h3>
          <div className="space-y-2">
            {[
              'Proficiency in JavaScript or Python',
              'Understanding of data structures',
              'Problem-solving skills',
            ].map((req, i) => (
              <div key={i} className="flex items-center space-x-2">
                <Check size={14} style={{ color: colors.success }} />
                <span className="text-sm" style={{ color: colors.textMuted }}>{req}</span>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="p-4 rounded-xl mb-6"
          style={{ backgroundColor: `${colors.yellow}15`, border: `1px solid ${colors.yellow}30` }}
        >
          <div className="flex items-center space-x-3">
            <Trophy size={24} style={{ color: colors.yellow }} />
            <div>
              <p className="font-semibold" style={{ color: colors.white }}>Top Performers Reward</p>
              <p className="text-sm" style={{ color: colors.textMuted }}>
                Fast-track interview + Company swag
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setAgreed(!agreed)}
          className="w-full p-4 rounded-xl flex items-center space-x-3 mb-6"
          style={{ backgroundColor: colors.darkGray }}
        >
          <div 
            className="w-6 h-6 rounded border-2 flex items-center justify-center"
            style={{ 
              borderColor: agreed ? colors.cyan : colors.textMuted,
              backgroundColor: agreed ? colors.cyan : 'transparent',
            }}
          >
            {agreed && <Check size={14} style={{ color: colors.dark }} />}
          </div>
          <span className="text-sm" style={{ color: colors.white }}>
            I agree to the challenge rules and code of conduct
          </span>
        </button>

        <button
          onClick={onStart}
          disabled={!agreed}
          className="w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2"
          style={{ 
            backgroundColor: agreed ? colors.cyan : colors.lightGray, 
            color: colors.dark,
            opacity: agreed ? 1 : 0.5,
          }}
        >
          <Rocket size={20} />
          <span>Start Challenge</span>
        </button>
      </div>
    </div>
  );
};

// ============================================
// GAMIFICATION SCREENS
// ============================================

const LeaderboardScreen = ({ onBack }) => {
  const leaders = [
    { rank: 1, name: 'Maria Santos', points: 5420, badges: 12, trend: 'up' },
    { rank: 2, name: 'James Chen', points: 4890, badges: 10, trend: 'up' },
    { rank: 3, name: 'Sofia Garcia', points: 4650, badges: 11, trend: 'down' },
    { rank: 4, name: 'Alex Martinez', points: 2450, badges: 3, trend: 'up', isUser: true },
    { rank: 5, name: 'Emma Wilson', points: 2380, badges: 4, trend: 'same' },
    { rank: 6, name: 'Liam Brown', points: 2100, badges: 3, trend: 'up' },
  ];

  return (
    <div className="h-full overflow-y-auto pb-24" style={{ backgroundColor: colors.dark }}>
      <div className="pt-12 px-4">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: colors.darkGray }}
        >
          <ChevronLeft size={24} style={{ color: colors.white }} />
        </button>
      </div>

      <div className="px-6">
        <h1 className="text-2xl font-bold mb-2" style={{ color: colors.white }}>Leaderboard</h1>
        <p className="mb-6" style={{ color: colors.textMuted }}>Talent Arena 2027 Rankings</p>

        <div className="flex items-end justify-center space-x-2 mb-8">
          <div className="flex flex-col items-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold mb-2"
              style={{ backgroundColor: '#C0C0C0', color: colors.dark }}
            >
              JC
            </div>
            <div 
              className="w-20 h-16 rounded-t-xl flex items-center justify-center"
              style={{ backgroundColor: '#C0C0C0' }}
            >
              <span className="text-2xl font-black" style={{ color: colors.dark }}>2</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Crown size={24} style={{ color: colors.yellow }} className="mb-1" />
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold mb-2"
              style={{ backgroundColor: colors.yellow, color: colors.dark }}
            >
              MS
            </div>
            <div 
              className="w-24 h-20 rounded-t-xl flex items-center justify-center"
              style={{ backgroundColor: colors.yellow }}
            >
              <span className="text-3xl font-black" style={{ color: colors.dark }}>1</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold mb-2"
              style={{ backgroundColor: '#CD7F32', color: colors.dark }}
            >
              SG
            </div>
            <div 
              className="w-20 h-12 rounded-t-xl flex items-center justify-center"
              style={{ backgroundColor: '#CD7F32' }}
            >
              <span className="text-2xl font-black" style={{ color: colors.dark }}>3</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {leaders.slice(3).map((leader) => (
            <div
              key={leader.rank}
              className="p-4 rounded-xl flex items-center space-x-4"
              style={{ 
                backgroundColor: leader.isUser ? `${colors.cyan}15` : colors.darkGray,
                border: leader.isUser ? `1px solid ${colors.cyan}` : 'none',
              }}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                style={{ backgroundColor: colors.lightGray, color: colors.white }}
              >
                {leader.rank}
              </div>
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
                style={{ backgroundColor: colors.mediumGray, color: colors.white }}
              >
                {leader.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <p className="font-semibold" style={{ color: colors.white }}>
                  {leader.name} {leader.isUser && '(You)'}
                </p>
                <div className="flex items-center space-x-3 text-sm" style={{ color: colors.textMuted }}>
                  <span>{leader.points.toLocaleString()} pts</span>
                  <span>{leader.badges} badges</span>
                </div>
              </div>
              <TrendingUp size={16} style={{ color: leader.trend === 'up' ? colors.success : colors.error }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BadgesScreen = ({ onBack }) => {
  const categories = [
    {
      name: 'Event Participation',
      badges: [
        { name: 'First Check-in', icon: <Check size={24} />, earned: true },
        { name: 'Early Bird', icon: <Clock size={24} />, earned: true },
        { name: 'Marathon', icon: <Flame size={24} />, earned: false },
      ],
    },
    {
      name: 'Networking',
      badges: [
        { name: 'Networker', icon: <Users size={24} />, earned: true },
        { name: 'Super Connector', icon: <Zap size={24} />, earned: false },
        { name: 'Influencer', icon: <Star size={24} />, earned: false },
      ],
    },
    {
      name: 'Competitions',
      badges: [
        { name: 'Challenger', icon: <Target size={24} />, earned: false },
        { name: 'Bug Hunter', icon: <Bug size={24} />, earned: false },
        { name: 'Hackathon Hero', icon: <Trophy size={24} />, earned: false },
      ],
    },
  ];

  return (
    <div className="h-full overflow-y-auto pb-24" style={{ backgroundColor: colors.dark }}>
      <div className="pt-12 px-4">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: colors.darkGray }}
        >
          <ChevronLeft size={24} style={{ color: colors.white }} />
        </button>
      </div>

      <div className="px-6">
        <h1 className="text-2xl font-bold mb-2" style={{ color: colors.white }}>Badges</h1>
        <p className="mb-6" style={{ color: colors.textMuted }}>3 of 15 earned</p>

        <div className="mb-8">
          <div className="w-full h-3 rounded-full" style={{ backgroundColor: colors.lightGray }}>
            <div className="h-full rounded-full" style={{ width: '20%', backgroundColor: colors.cyan }} />
          </div>
        </div>

        {categories.map((category, i) => (
          <div key={i} className="mb-8">
            <h3 className="font-semibold mb-4" style={{ color: colors.white }}>{category.name}</h3>
            <div className="grid grid-cols-3 gap-3">
              {category.badges.map((badge, j) => (
                <div
                  key={j}
                  className="p-4 rounded-2xl flex flex-col items-center text-center"
                  style={{ backgroundColor: colors.darkGray, opacity: badge.earned ? 1 : 0.5 }}
                >
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
                    style={{ 
                      backgroundColor: badge.earned ? colors.cyan : colors.lightGray,
                      color: badge.earned ? colors.dark : colors.textMuted,
                    }}
                  >
                    {badge.icon}
                  </div>
                  <p className="text-xs font-medium" style={{ color: badge.earned ? colors.white : colors.textMuted }}>
                    {badge.name}
                  </p>
                  {!badge.earned && <Lock size={10} style={{ color: colors.textMuted }} className="mt-1" />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================
// CHECK-IN SCREEN
// ============================================

const CheckInScreen = ({ onBack }) => {
  const [scanning, setScanning] = useState(false);
  const [checkedIn, setCheckedIn] = useState(false);

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setCheckedIn(true);
    }, 2000);
  };

  if (checkedIn) {
    return (
      <div className="h-full flex flex-col items-center justify-center px-6" style={{ backgroundColor: colors.dark }}>
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: `${colors.success}20` }}
        >
          <Check size={48} style={{ color: colors.success }} />
        </div>
        <h1 className="text-2xl font-bold mb-2 text-center" style={{ color: colors.white }}>
          Welcome to Talent Arena!
        </h1>
        <p className="text-center mb-4" style={{ color: colors.textMuted }}>
          You've earned 100 points for checking in
        </p>
        <div 
          className="px-4 py-2 rounded-full flex items-center space-x-2"
          style={{ backgroundColor: colors.yellow, color: colors.dark }}
        >
          <Award size={16} />
          <span className="font-bold">+100 pts</span>
        </div>
        <button
          onClick={onBack}
          className="mt-8 px-8 py-3 rounded-xl font-semibold"
          style={{ backgroundColor: colors.cyan, color: colors.dark }}
        >
          Continue to Event
        </button>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: colors.dark }}>
      <div className="pt-12 px-4">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: colors.darkGray }}
        >
          <ChevronLeft size={24} style={{ color: colors.white }} />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <h1 className="text-2xl font-bold mb-2 text-center" style={{ color: colors.white }}>
          Event Check-in
        </h1>
        <p className="text-center mb-8" style={{ color: colors.textMuted }}>
          Scan the QR code at the entrance
        </p>

        <div 
          className="w-64 h-64 rounded-3xl flex items-center justify-center mb-8 relative overflow-hidden"
          style={{ backgroundColor: colors.darkGray, border: `2px solid ${colors.cyan}` }}
        >
          {scanning ? (
            <p className="text-sm" style={{ color: colors.cyan }}>Scanning...</p>
          ) : (
            <QrCode size={100} style={{ color: colors.textMuted }} />
          )}
        </div>

        <button
          onClick={handleScan}
          disabled={scanning}
          className="w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2"
          style={{ backgroundColor: colors.cyan, color: colors.dark }}
        >
          <Camera size={20} />
          <span>{scanning ? 'Scanning...' : 'Scan QR Code'}</span>
        </button>
      </div>
    </div>
  );
};

// ============================================
// MAP SCREEN
// ============================================

const MapScreen = ({ onBack }) => {
  const [selectedZone, setSelectedZone] = useState(null);

  const zones = [
    { id: 'main1', name: 'Main Stage 1', type: 'stage', x: 20, y: 30 },
    { id: 'main2', name: 'Main Stage 2', type: 'stage', x: 60, y: 30 },
    { id: 'workshop', name: 'Workshop Zone', type: 'workshop', x: 40, y: 50 },
    { id: 'networking', name: 'Networking Area', type: 'networking', x: 70, y: 60 },
    { id: 'food', name: 'Food Court', type: 'food', x: 30, y: 75 },
    { id: 'vip', name: 'VIP Lounge', type: 'vip', x: 80, y: 80 },
  ];

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: colors.dark }}>
      <div className="pt-12 px-4">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: colors.darkGray }}
        >
          <ChevronLeft size={24} style={{ color: colors.white }} />
        </button>
      </div>

      <div className="px-6 mb-4">
        <h1 className="text-2xl font-bold mb-2" style={{ color: colors.white }}>Venue Map</h1>
        <p style={{ color: colors.textMuted }}>Fira Barcelona Montjuïc - Hall 8</p>
      </div>

      <div className="flex-1 mx-6 mb-4 rounded-2xl relative overflow-hidden" style={{ backgroundColor: colors.darkGray }}>
        {zones.map((zone) => (
          <button
            key={zone.id}
            onClick={() => setSelectedZone(zone)}
            className="absolute w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            style={{ 
              left: `${zone.x}%`, 
              top: `${zone.y}%`,
              transform: 'translate(-50%, -50%)',
              backgroundColor: selectedZone?.id === zone.id ? colors.cyan : colors.yellow,
              color: colors.dark,
            }}
          >
            {zone.type === 'stage' && <Star size={20} />}
            {zone.type === 'workshop' && <Code size={20} />}
            {zone.type === 'networking' && <Users size={20} />}
            {zone.type === 'food' && <Coffee size={20} />}
            {zone.type === 'vip' && <Crown size={20} />}
          </button>
        ))}

        <div 
          className="absolute w-3 h-3 rounded-full"
          style={{ left: '50%', top: '45%', backgroundColor: colors.cyan, transform: 'translate(-50%, -50%)' }}
        />
      </div>

      {selectedZone && (
        <div className="mx-6 mb-6 p-4 rounded-2xl" style={{ backgroundColor: colors.darkGray }}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold" style={{ color: colors.white }}>{selectedZone.name}</h3>
              <p className="text-sm" style={{ color: colors.textMuted }}>Tap for directions</p>
            </div>
            <button
              className="px-4 py-2 rounded-xl font-semibold text-sm"
              style={{ backgroundColor: colors.cyan, color: colors.dark }}
            >
              Navigate
            </button>
          </div>
        </div>
      )}

      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-3">
          {[
            { icon: <Star size={14} />, label: 'Stage' },
            { icon: <Code size={14} />, label: 'Workshop' },
            { icon: <Users size={14} />, label: 'Networking' },
            { icon: <Coffee size={14} />, label: 'Food' },
          ].map((item, i) => (
            <div 
              key={i}
              className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs"
              style={{ backgroundColor: colors.mediumGray, color: colors.white }}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================
// WEBINARS SCREEN
// ============================================

const WebinarsScreen = ({ onBack }) => {
  const webinars = [
    {
      id: 1,
      title: 'AI in 2027: What Developers Need to Know',
      speaker: 'Dr. Sarah Chen',
      company: 'Google DeepMind',
      date: 'Mar 15, 2027',
      attendees: 342,
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Architecture',
      speaker: 'Marcus Johnson',
      company: 'AWS',
      date: 'Mar 22, 2027',
      attendees: 256,
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Career Paths in Cybersecurity',
      speaker: 'Emma Wilson',
      company: 'CrowdStrike',
      date: 'Mar 8, 2027',
      attendees: 189,
      status: 'recorded',
    },
  ];

  return (
    <div className="h-full overflow-y-auto pb-24" style={{ backgroundColor: colors.dark }}>
      <div className="pt-12 px-4">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: colors.darkGray }}
        >
          <ChevronLeft size={24} style={{ color: colors.white }} />
        </button>
      </div>

      <div className="px-6">
        <h1 className="text-2xl font-bold mb-2" style={{ color: colors.white }}>Webinars</h1>
        <p className="mb-6" style={{ color: colors.textMuted }}>Learn from industry experts year-round</p>

        <div className="space-y-4">
          {webinars.map((webinar) => (
            <div key={webinar.id} className="p-4 rounded-2xl" style={{ backgroundColor: colors.darkGray }}>
              <div className="flex items-center space-x-2 mb-2">
                <span 
                  className="px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{ 
                    backgroundColor: webinar.status === 'upcoming' ? colors.cyan : colors.lightGray,
                    color: webinar.status === 'upcoming' ? colors.dark : colors.white,
                  }}
                >
                  {webinar.status === 'upcoming' ? 'LIVE' : 'RECORDED'}
                </span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: colors.white }}>{webinar.title}</h3>
              <div className="flex items-center space-x-3 mb-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: colors.mediumGray, color: colors.white }}
                >
                  {webinar.speaker.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: colors.white }}>{webinar.speaker}</p>
                  <p className="text-xs" style={{ color: colors.textMuted }}>{webinar.company}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs" style={{ color: colors.textMuted }}>
                  <span>{webinar.date}</span>
                  <span>{webinar.attendees} attendees</span>
                </div>
                <button
                  className="px-4 py-2 rounded-xl text-sm font-semibold"
                  style={{ 
                    backgroundColor: webinar.status === 'upcoming' ? colors.cyan : colors.lightGray,
                    color: webinar.status === 'upcoming' ? colors.dark : colors.white,
                  }}
                >
                  {webinar.status === 'upcoming' ? 'Register' : 'Watch'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================
// MEETUPS SCREEN
// ============================================

const MeetupsScreen = ({ onBack }) => {
  const meetups = [
    { id: 1, city: 'Barcelona', title: 'TA365 Barcelona Monthly', date: 'Mar 20, 2027', venue: 'Pier 01', distance: '2.5 km' },
    { id: 2, city: 'Madrid', title: 'TA365 Madrid Networking', date: 'Mar 25, 2027', venue: 'Google Campus', distance: '620 km' },
    { id: 3, city: 'Paris', title: 'TA365 Paris Tech Drinks', date: 'Apr 2, 2027', venue: 'Station F', distance: '1,040 km' },
  ];

  return (
    <div className="h-full overflow-y-auto pb-24" style={{ backgroundColor: colors.dark }}>
      <div className="pt-12 px-4">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: colors.darkGray }}
        >
          <ChevronLeft size={24} style={{ color: colors.white }} />
        </button>
      </div>

      <div className="px-6">
        <h1 className="text-2xl font-bold mb-2" style={{ color: colors.white }}>Regional Meetups</h1>
        <p className="mb-6" style={{ color: colors.textMuted }}>Connect with the community near you</p>

        <div 
          className="h-40 rounded-2xl mb-6 flex items-center justify-center"
          style={{ backgroundColor: colors.darkGray }}
        >
          <div className="text-center">
            <Map size={32} style={{ color: colors.cyan }} />
            <p className="text-sm mt-2" style={{ color: colors.textMuted }}>Interactive Map</p>
          </div>
        </div>

        <h3 className="font-semibold mb-4" style={{ color: colors.white }}>Upcoming Meetups</h3>
        <div className="space-y-3">
          {meetups.map((meetup) => (
            <div key={meetup.id} className="p-4 rounded-2xl" style={{ backgroundColor: colors.darkGray }}>
              <div className="flex items-center space-x-2 mb-2">
                <MapPin size={14} style={{ color: colors.cyan }} />
                <span className="text-sm font-semibold" style={{ color: colors.cyan }}>{meetup.city}</span>
                <span className="text-xs" style={{ color: colors.textMuted }}>• {meetup.distance}</span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: colors.white }}>{meetup.title}</h3>
              <div className="flex items-center justify-between">
                <div className="text-xs" style={{ color: colors.textMuted }}>
                  <p>{meetup.date}</p>
                  <p>{meetup.venue}</p>
                </div>
                <button
                  className="px-4 py-2 rounded-xl text-sm font-semibold"
                  style={{ backgroundColor: colors.cyan, color: colors.dark }}
                >
                  RSVP
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================
// PHONE FRAME
// ============================================

const PhoneFrame = ({ children }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
    <div 
      className="relative bg-black rounded-[3rem] p-3 shadow-2xl"
      style={{ 
        width: '390px', 
        height: '844px',
        boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5), 0 30px 60px -30px rgba(0,212,230,0.3)'
      }}
    >
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-50" />
      <div 
        className="relative w-full h-full rounded-[2.5rem] overflow-hidden"
        style={{ backgroundColor: colors.dark }}
      >
        {children}
      </div>
    </div>
  </div>
);

// ============================================
// MAIN EXPORT
// ============================================

export default function TalentArena365Extended() {
  const [screen, setScreen] = useState('challenges');

  const screens = {
    tickets: <TicketSelectionScreen onBack={() => setScreen('challenges')} onSelect={() => setScreen('ticketConfirm')} />,
    ticketConfirm: <TicketConfirmationScreen onClose={() => setScreen('tickets')} />,
    challenges: <ChallengesListScreen onBack={() => {}} onSelect={() => setScreen('challengeDetail')} />,
    challengeDetail: <ChallengeDetailScreen onBack={() => setScreen('challenges')} onStart={() => setScreen('challenges')} />,
    leaderboard: <LeaderboardScreen onBack={() => setScreen('challenges')} />,
    badges: <BadgesScreen onBack={() => setScreen('challenges')} />,
    webinars: <WebinarsScreen onBack={() => setScreen('challenges')} />,
    meetups: <MeetupsScreen onBack={() => setScreen('challenges')} />,
    checkin: <CheckInScreen onBack={() => setScreen('challenges')} />,
    map: <MapScreen onBack={() => setScreen('challenges')} />,
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex justify-center py-4 space-x-2 flex-wrap gap-2 px-4">
        {Object.keys(screens).map((key) => (
          <button
            key={key}
            onClick={() => setScreen(key)}
            className="px-3 py-1 rounded-full text-xs font-medium transition-colors"
            style={{
              backgroundColor: screen === key ? colors.cyan : colors.darkGray,
              color: screen === key ? colors.dark : colors.white,
            }}
          >
            {key}
          </button>
        ))}
      </div>
      
      <PhoneFrame>
        {screens[screen]}
      </PhoneFrame>
    </div>
  );
}
