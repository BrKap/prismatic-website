import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import PlaceholderPage from './pages/PlaceholderPage';
import NotFoundPage from './pages/NotFoundPage';
import LotteryDefensePage from './pages/LotteryDefense/LotteryDefensePage';
import RegionPage from './pages/LotteryDefense/RegionPage';
import LotteryDefenseCalculatorPage from './pages/LotteryDefense/EUNA/LotteryDefenseCalculatorPage';

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/lottery-defense" element={<LotteryDefensePage />} />
        <Route path="/lottery-defense/euna" element={<RegionPage title="Lottery Defense - EUNA" />} />
        <Route path="/lottery-defense/euna/guides" element={<PlaceholderPage title="Lottery Defense - EUNA Guides" />} />
        <Route path="/lottery-defense/euna/calculator" element={<LotteryDefenseCalculatorPage />} />
        <Route path="/lottery-defense/kr" element={<RegionPage title="Lottery Defense - KR" />} />
        <Route path="/lottery-defense/kr/guides" element={<PlaceholderPage title="Lottery Defense - KR Guides" />} />
        <Route path="/lottery-defense/kr/calculator" element={<PlaceholderPage title="Lottery Defense - KR Calculator" />} />


        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SiteLayout>
  );
}
