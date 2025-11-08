import React from 'react';
import MainHeader from '../components/MainHeader';
import './Introduction.css';

import heroVisual from '../images/Introduction/image@2x.png';
import overviewVisual from '../images/Introduction/容器 112@2x.png';
import matrixVisual from '../images/Introduction/容器 113@2x.png';
import roadmapVisual from '../images/Introduction/容器 114@2x.png';

const introductionVisuals = [
  {
    id: 'overview',
    src: overviewVisual,
    alt: 'DKB 数字航旅生态全景介绍',
  },
  {
    id: 'matrix',
    src: matrixVisual,
    alt: 'DKB 数字航旅生态业务矩阵与技术架构',
  },
  {
    id: 'roadmap',
    src: roadmapVisual,
    alt: 'DKB 数字航旅生态路线图与合作网络',
  },
];

function Introduction() {
  return (
    <div className="page page--introduction">
      <MainHeader theme="dark" />
      <main className="introduction">
        <section className="intro-visual intro-visual--hero">
          <div className="introduction__plate introduction__plate--hero">
            <img src={heroVisual} alt="DKB 官方生态介绍主视觉" draggable="false" />
          </div>
        </section>
        {introductionVisuals.map((visual) => (
          <section key={visual.id} className="intro-visual">
            <div className="introduction__plate">
              <img src={visual.src} alt={visual.alt} loading="lazy" draggable="false" />
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Introduction;
