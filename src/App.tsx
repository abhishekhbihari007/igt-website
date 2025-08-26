import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';

// ============== TYPE DEFINITIONS ==============
interface HeaderProps {
  activePage: string;
}

interface Course {
  title: string;
  image: string;
  duration: string;
  description: string;
  list?: string[];
}

interface ProgramCardProps {
  course: Course;
}

// =================================================================================
// STYLE COMPONENT
// =================================================================================

const GlobalStyles = () => (
  <style>{`
    /* ============== FONT IMPORT ============== */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

    /* ============== ROOT ELEMENT STYLES ============== */
    #root {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    /* ============== GENERAL BODY STYLES ============== */
    body {
        font-family: 'Inter', Arial, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #f8f9fa;
        color: #212529;
        line-height: 1.6;
        overflow-x: hidden; /* Prevents horizontal scrolling */
        width: 100%;
    }

    /* ============== CONTAINER & TYPOGRAPHY ============== */
    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        box-sizing: border-box;
    }

    h1, h2, h3 {
        font-weight: 700;
    }

    /* ============== HEADER SECTION STYLES ============== */
    .header {
        background-color: #ffffff;
        color: #333;
        padding: 10px 0;
        position: sticky;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        border-bottom: 1px solid #e0e0e0;
    }

    .header .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-container {
        display: flex;
        align-items: center;
        cursor: pointer;
        flex-shrink: 0;
        text-decoration: none;
        border-bottom: none;
    }

    .logo-crest {
        height: 70px;
        margin-right: 13px;
    }

    .logo-text-container {
        display: flex;
        flex-direction: column;
    }
    
    .logo-title {
        font-size: 22px;
        font-weight: 700;
        color: #D32F2F;
        margin: 0;
        white-space: nowrap;
        text-decoration: none;
        border-bottom: none;
    }

    .logo-tagline {
        font-size: 12px;
        color: #212529;
        margin: 0;
        text-decoration: none;
        border-bottom: none;
    }

    .header nav {
        display: flex;
        margin-left: auto;
    }

    .header nav ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
    }

    .header nav ul li {
        margin-left: 30px;
    }

    .header nav ul li a {
        color: #212529;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.3s ease;
        cursor: pointer;
    }

    .header nav ul li a:hover,
    .header nav ul li a.active {
        color: #D32F2F;
    }
    
    .menu-toggle {
        display: none;
        font-size: 24px;
        background: none;
        border: none;
        cursor: pointer;
        color: #212529;
    }

    /* ============== HERO SECTION STYLES ============== */
    .hero {
        color: white;
        text-align: center;
        padding: 80px 20px;
        position: relative;
        min-height: 70vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        overflow: hidden;
    }

    .hero-content {
        max-width: 1000px;
        margin: 0 auto;
        position: relative;
        z-index: 2;
        text-align: center;
    }

    .hero-title-glance {
        text-align: center;
        margin-bottom: 20px;
    }
    
    .glance-line {
        margin-bottom: 6px;
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
        transform: translateY(30px);
    }
    
    .glance-line:nth-child(1) { animation-delay: 0.2s; }
    .glance-line:nth-child(2) { animation-delay: 0.4s; }
    .glance-line:nth-child(3) { animation-delay: 0.6s; }
    
    .glance-label {
        font-size: clamp(1.3rem, 3.5vw, 1.8rem);
        font-weight: 600;
        color: #ffffff;
        text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
        letter-spacing: 2px;
        text-transform: uppercase;
        font-family: 'Inter', sans-serif;
        display: block;
    }
    
    .glance-main {
        font-size: clamp(2.5rem, 7vw, 4rem);
        font-weight: 700;
        color: #ffffff;
        text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
        letter-spacing: 1px;
        line-height: 1.1;
        text-transform: none;
        font-family: 'Inter', sans-serif;
        display: block;
    }
    
    .hero-glance-content {
        max-width: 1000px;
        margin: 0 auto;
    }
    
    .hero-description {
        margin-bottom: 30px;
    }
    
    .hero p {
        font-size: 1.5rem;
        margin-bottom: 40px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
        font-weight: 300;
        color: #ffffff;
        line-height: 1.8;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        letter-spacing: 0.5px;
    }
    
    .hero-accredited {
        font-weight: 600;
        font-size: 1.1rem;
        color: white;
        margin-top: 20px;
        display: inline-block;
        font-family: 'Inter', sans-serif;
        text-transform: none;
        letter-spacing: 0.5px;
    }

    /* ============== GENERAL SECTION STYLES ============== */
    section {
        padding: 25px 20px;
        width: 100%;
        box-sizing: border-box;
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInUp 0.8s ease-out forwards;
    }

    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Stagger animation for multiple sections */
    section:nth-child(2) { animation-delay: 0.1s; }
    section:nth-child(3) { animation-delay: 0.2s; }
    section:nth-child(4) { animation-delay: 0.3s; }
    section:nth-child(5) { animation-delay: 0.4s; }

    section h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 8px;
        color: #212529;
    }
    
    .section-subtitle {
        text-align: center;
        font-size: 1.1rem;
        color: #495057;
        margin-bottom: 20px;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .section-subtitle::after {
        content: '';
        display: block;
        width: 50px;
        height: 3px;
        background-color: #C0A062;
        margin: 15px auto 0;
    }


    /* ============== ABOUT SECTION ============== */
    .about {
        background-color: #fdfaf5;
    }
    
    .about-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 15px;
        align-items: center;
    }
    
    .about-image img {
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    
    .about-content h3 {
        font-size: 1.8rem;
        margin-bottom: 20px;
        color: #212529;
    }
    
    .about-content p {
        margin-bottom: 20px;
    }
    
    .accredited-text {
        font-weight: 700;
        color: #212529;
        margin-bottom: 30px;
    }
    
    .stats-container {
        display: flex;
        gap: 30px;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    
    .stat-item {
        text-align: left;
        transition: transform 0.3s ease;
    }
    
    .stat-item:hover {
        transform: scale(1.1);
    }

    .stat-item .number {
        font-size: 2.5rem;
        font-weight: 700;
        color: #D32F2F;
        transition: color 0.3s ease;
    }
    
    .stat-item:hover .number {
        color: #C0A062;
    }
    
    .stat-item .label {
        font-size: 1rem;
        color: #495057;
        font-weight: 600;
    }
    
    
    /* ============== WHY CHOOSE US SECTION ============== */
    .why-choose-us {
        background-color: #f8f9fa;
    }
    
    .why-choose-us h2 {
        color: #212529;
    }
    
    .why-choose-us h2 .question-mark {
        color: #D32F2F;
    }
    
    .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 15px;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .feature-item {
        background: #ffffff;
        padding: 0;
        text-align: left;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        overflow: hidden;
        transition: all 0.3s ease;

    }
    
    .feature-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0,0,0,0.1);
    }

    .feature-item img {
        width: 100%;
        height: 180px;
        object-fit: cover;
    }
    
    .feature-content {
        padding: 25px;
    }
    
    .feature-content h3 {
        color: #212529;
        margin-top: 0;
        margin-bottom: 10px;
    }

    /* ============== PROGRAMS PAGE STYLES ============== */
    .programs-page {
        padding: 0;
        background-color: #f8f9fa;
    }
    
    .no-results-container {
        text-align: center;
        padding: 60px 20px;
    }
    
    .no-results-title {
        color: #495057;
        margin-bottom: 20px;
        font-size: 1.5rem;
        font-weight: 600;
    }
    
    .no-results-message {
        color: #6c757d;
        margin-bottom: 20px;
        font-size: 1rem;
        line-height: 1.5;
    }
    
    .clear-filters-btn {
        background: #D32F2F;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 20px;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    
    .clear-filters-btn:hover {
        background: #B71C1C;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(211, 47, 47, 0.3);
    }
    
    .programs-overview {
        background: linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%);
        color: white;
        padding: 60px 20px;
        margin: 0;
    }
    
    .overview-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 30px;
        max-width: 1000px;
        margin: 0 auto;
    }
    
    .overview-stats .stat-item {
        text-align: center;
        padding: 20px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .overview-stats .stat-number {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 10px;
        color: #FFD700;
    }
    
    .overview-stats .stat-label {
        font-size: 1rem;
        font-weight: 500;
        opacity: 0.9;
    }
    
    .search-filter-section {
        background: white;
        padding: 40px 20px;
        border-bottom: 1px solid #e9ecef;
    }
    
    .search-filter-container {
        display: flex;
        gap: 20px;
        max-width: 800px;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .search-box {
        position: relative;
        flex: 1;
        min-width: 300px;
    }
    
    .search-box i {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: #6c757d;
    }
    
    .search-box input {
        width: 100%;
        padding: 12px 15px 12px 45px;
        border: 2px solid #e9ecef;
        border-radius: 25px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
    }
    
    .search-box input:focus {
        outline: none;
        border-color: #D32F2F;
    }
    
    .category-filter select {
        padding: 12px 20px;
        border: 2px solid #e9ecef;
        border-radius: 25px;
        font-size: 1rem;
        background: white;
        cursor: pointer;
        min-width: 200px;
    }
    
    .category-filter select:focus {
        outline: none;
        border-color: #D32F2F;
    }
    
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
    
    /* ============== MODAL STYLES ============== */
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 20px;
    }
    
    .modal-content {
        background: white;
        border-radius: 12px;
        max-width: 800px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }
    
    .modal-close {
        position: absolute;
        top: 20px;
        right: 20px;
        background: #f8f9fa;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 1.2rem;
        color: #6c757d;
        transition: all 0.3s ease;
        z-index: 10;
    }
    
    .modal-close:hover {
        background: #e9ecef;
        color: #495057;
    }
    
    .modal-header {
        display: flex;
        gap: 20px;
        padding: 30px;
        border-bottom: 1px solid #e9ecef;
        align-items: center;
    }
    
    .modal-image {
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 8px;
        border: 3px solid #D32F2F;
    }
    
    .modal-title h2 {
        margin: 0 0 15px;
        font-size: 1.8rem;
        color: #212529;
    }
    
    .modal-meta {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
    
    .modal-meta span {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #6c757d;
        font-size: 0.9rem;
    }
    
    .modal-meta i {
        color: #D32F2F;
    }
    
    .modal-body {
        padding: 30px;
    }
    
    .modal-description h3,
    .modal-list h3,
    .modal-features h3 {
        margin: 0 0 15px;
        font-size: 1.3rem;
        color: #212529;
        border-bottom: 2px solid #D32F2F;
        padding-bottom: 8px;
    }
    
    .modal-description p {
        color: #495057;
        line-height: 1.6;
        margin-bottom: 25px;
    }
    
    .modal-list ul {
        padding-left: 20px;
        margin-bottom: 25px;
    }
    
    .modal-list li {
        color: #495057;
        margin-bottom: 8px;
        line-height: 1.5;
    }
    
    .modal-features .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
    }
    
    .modal-features .feature-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 15px;
        background: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid #D32F2F;
    }
    
    .modal-features .feature-item i {
        color: #D32F2F;
        font-size: 1.2rem;
    }
    
    .modal-footer {
        padding: 30px;
        border-top: 1px solid #e9ecef;
        display: flex;
        gap: 15px;
        justify-content: flex-end;
    }
    
    .btn-apply-large {
        background: #D32F2F;
        color: white;
        padding: 15px 30px;
        border: none;
        border-radius: 25px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .btn-apply-large:hover {
        background: #B71C1C;
        transform: translateY(-2px);
    }
    .page-banner {
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        color: white;
        padding: 80px 20px;
        text-align: center;
        position: relative;
        width: 100%;
    }

    .page-banner .container {
        position: relative;
    }
    .page-banner h2 {
        color: white;
        font-size: 3rem;
        margin-bottom: 15px;
    }
    .page-banner p {
        max-width: 600px;
        margin: 0 auto 30px;
        font-size: 1.1rem;
    }
    
    .program-category {
        padding: 40px 20px;
    }

    .category-header {
        text-align: center;
        margin-bottom: 40px;
    }
    
    .category-header h3 {
        font-size: 2.5rem;
        margin-bottom: 15px;
        font-weight: 700;
        color: #000000;
        position: relative;
    }
    
    .category-header h3::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, #000000, #C0A062);
        border-radius: 2px;
    }
    
    .category-header p {
        font-size: 1.2rem;
        color: #495057;
        max-width: 800px;
        margin: 20px auto 0;
        line-height: 1.6;
    }

    .program-cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
        margin: 0 auto;
        max-width: 1200px;
        padding: 0 20px;
        justify-items: center;
    }
    
    .program-card {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 6px 25px rgba(0,0,0,0.08);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        border: 1px solid #e8e8e8;
        border-top: 4px solid #D32F2F;
        transition: all 0.3s ease;
        height: 100%;
        width: 100%;
        max-width: 400px;
    }
    
    .program-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.12);
    }
    
    .program-card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .program-card-content {
        padding: 20px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    
    .program-card-content h4 {
        margin: 0 0 15px;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.3;
        color: #212529;
        min-height: 2.5em;
    }
    .program-card-duration {
        color: #495057;
        font-size: 0.95rem;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        font-weight: 600;
    }
    .program-card-duration i {
        margin-right: 8px;
        color: #D32F2F;
    }
    .program-card-description {
        color: #212529;
        flex-grow: 1;
        margin-bottom: 25px;
        font-size: 1rem;
        line-height: 1.6;
    }
     .program-card-description ul {
        padding-left: 20px;
        margin-top: 10px;
    }
    .program-card-buttons {
        display: flex;
        gap: 12px;
        margin-top: auto;
    }
    
    .program-card-buttons .btn {
        padding: 12px 20px;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 600;
        text-align: center;
        flex: 1;
        transition: all 0.3s ease;
        border: 2px solid #D32F2F;
        font-size: 0.9rem;
        height: 48px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }
    .btn-details {
        background-color: #D32F2F;
        color: #fff;
        border: 2px solid #D32F2F;
        transition: all 0.3s ease;
    }
    
    .btn-details:hover {
        background-color: #fff;
        color: #D32F2F;
        border: 2px solid #D32F2F;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(211, 47, 47, 0.3);
    }
    
    .btn-apply {
        background-color: #fff;
        color: #D32F2F;
    }
    .btn-apply:hover {
        background-color: #D32F2F;
        color: #fff;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(211, 47, 47, 0.3);
    }

    /* ============== ACADEMIC PROGRAMS STYLES ============== */
    .academic-programs {
        background-color: #f8f9fa;
        padding: 40px 0;
    }
    
    .programs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto;
        justify-items: center;
        padding: 0 20px;
    }
    
    .program-card {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 6px 25px rgba(0,0,0,0.08);
        overflow: hidden;
        transition: all 0.3s ease;
        border: 1px solid #e8e8e8;
        border-top: 4px solid #D32F2F;
        width: 100%;
        max-width: 400px;
        height: 580px;
        display: flex;
        flex-direction: column;
    }
    
    .program-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.12);
    }
    
    .program-visual {
        position: relative;
        height: 200px;
        overflow: hidden;
    }
    
    .program-visual img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .program-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }
    
    .program-content h4 {
        font-size: 1.25rem;
        font-weight: 700;
        color: #212529;
        margin: 0 0 15px 0;
        line-height: 1.3;
        min-height: 2.5em;
    }
    
    .program-content p {
        color: #495057;
        margin-bottom: 25px;
        line-height: 1.7;
        font-size: 0.95rem;
        flex-grow: 1;
        margin-bottom: 20px;
    }
    
    .btn-details {
        background: #D32F2F;
        color: white;
        border: 2px solid #D32F2F;
        padding: 10px 20px;
        border-radius: 20px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-bottom: 20px;
        width: 100%;
        font-size: 0.9rem;
        box-sizing: border-box;
        margin-top: auto;
    }
    
    .btn-details:hover {
        background: white;
        color: #D32F2F;
        border: 2px solid #D32F2F;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(211, 47, 47, 0.3);
    }
    
    .learn-more {
        color: #D32F2F;
        text-decoration: none;
        font-weight: 600;
        display: inline-block;
        margin-bottom: 20px;
        transition: all 0.3s ease;
        text-align: center;
        width: 100%;
        padding: 10px 20px;
        border: 2px solid #D32F2F;
        border-radius: 20px;
        font-size: 0.9rem;
        box-sizing: border-box;
        margin-top: auto;
    }
    
    .learn-more:hover {
        background: #D32F2F;
        color: white;
    }
    
    .program-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 15px;
        margin-bottom: 20px;
        padding: 15px 0;
        border-top: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
        flex-shrink: 0;
    }
    
    .info-item {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.85rem;
        color: #495057;
        font-weight: 500;
        justify-content: center;
    }
    
    .info-item i {
        color: #D32F2F;
        font-size: 1rem;
    }

    /* ============== UPCOMING COURSES STYLES ============== */
    .upcoming-courses {
        background-color: #fdfaf5;
    }
    
    .courses-header {
        text-align: center;
        margin-bottom: 40px;
    }
    
    .expand-knowledge {
        font-size: 0.9rem;
        color: #D32F2F;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 10px;
        display: block;
    }
    
    .courses-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto 40px;
        justify-items: center;
        padding: 0 20px;
    }
    
    .course-card {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 6px 25px rgba(0,0,0,0.08);
        overflow: hidden;
        transition: all 0.3s ease;
        border: 1px solid #e8e8e8;
        border-top: 4px solid #D32F2F;
        width: 100%;
        max-width: 400px;
        height: fit-content;
    }
    
    .course-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.12);
    }
    
    .course-image {
        height: 200px;
        overflow: hidden;
        position: relative;
    }
    
    .course-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .course-badge {
        position: absolute;
        top: 15px;
        left: 15px;
        background: #D32F2F;
        color: white;
        padding: 5px 12px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
    }
    
    .course-card:hover .course-image img {
        transform: scale(1.05);
    }
    
    .course-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    
    .course-content h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: #212529;
        margin: 0 0 15px 0;
        line-height: 1.3;
        min-height: 2.5em;
    }
    
    .course-content p {
        color: #495057;
        margin-bottom: 25px;
        line-height: 1.7;
        font-size: 0.95rem;
        flex-grow: 1;
        margin-bottom: 20px;
    }
    
    .course-status {
        display: flex;
        gap: 15px;
        margin-bottom: 20px;
        padding: 15px 0;
        border-top: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
    }
    
    .status-item {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.85rem;
        color: #495057;
        font-weight: 500;
        justify-content: center;
        flex: 1;
    }
    
    .status-item i {
        color: #D32F2F;
        font-size: 1rem;
    }
    
    .btn-enroll {
        background: #D32F2F;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 20px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 100%;
        font-size: 0.9rem;
        box-sizing: border-box;
        margin-top: auto;
    }
    
    .btn-enroll:hover {
        background: #a32424;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(211, 47, 47, 0.3);
    }
    
    .btn-details-blue {
        background: #D32F2F;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 20px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 100%;
        font-size: 0.9rem;
        box-sizing: border-box;
        margin-top: auto;
    }
    
    .btn-details-blue:hover {
        background: #a32424;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(211, 47, 47, 0.3);
    }
    
    .view-all-courses {
        text-align: center;
    }
    
    .btn-view-all {
        background: white;
        color: #D32F2F;
        border: 2px solid #D32F2F;
        padding: 15px 30px;
        border-radius: 25px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1.1rem;
        outline: none !important;
        box-shadow: none !important;
        border-color: #D32F2F !important;
    }
    
    .btn-view-all:focus {
        outline: none !important;
        box-shadow: none !important;
        border-color: #D32F2F !important;
    }
    
    .btn-view-all:active {
        outline: none !important;
        box-shadow: none !important;
        border-color: #D32F2F !important;
    }
    
    .btn-view-all:hover {
        background: #D32F2F;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(211, 47, 47, 0.3);
    }

    /* ============== RESEARCH PROJECTS STYLES ============== */
    .research-projects {
        background-color: #fdfaf5;
    }
    .research-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        justify-items: center;
    }
    
    .research-card {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 6px 25px rgba(0,0,0,0.08);
        overflow: hidden;
        transition: all 0.3s ease;
        border: 1px solid #e8e8e8;
        border-top: 4px solid #D32F2F;
        width: 100%;
        max-width: 400px;
        height: fit-content;
    }
    
    .research-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.12);
    }
    .research-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .research-card-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    
    .research-card-content h3 {
        font-size: 1.25rem;
        margin: 0 0 15px 0;
        color: #212529;
        line-height: 1.3;
        min-height: 2.5em;
    }
    
    .research-card-content p {
        color: #495057;
        line-height: 1.7;
        font-size: 0.95rem;
        flex-grow: 1;
        margin: 0;
    }

    /* ============== EVENTS SECTION STYLES ============== */
    .events-section {
        background-color: #f8f9fa;
    }
    .events-tabs {
        text-align: center;
        margin-bottom: 15px;
    }
    .tab-btn {
        background: none;
        border: 1px solid white !important;
        font-size: 1.2rem;
        font-weight: 600;
        padding: 10px 20px;
        margin: 0 10px;
        cursor: pointer;
        position: relative;
        color: #495057;
        transition: color 0.3s ease;
    }
    .tab-btn::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #D32F2F;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }
    .tab-btn.active, .tab-btn:hover {
        color: #D32F2F;
    }
    .tab-btn.active::after {
        transform: scaleX(1);
    }
    .events-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        justify-items: center;
    }
    
    .event-card {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 6px 25px rgba(0,0,0,0.08);
        overflow: hidden;
        transition: all 0.3s ease;
        border: 1px solid #e8e8e8;
        border-top: 4px solid #D32F2F;
        width: 100%;
        max-width: 400px;
        height: fit-content;
    }
    
    .event-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.12);
    }
    
    .event-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    
    .event-card-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    
    .event-card-content h3 {
        font-size: 1.25rem;
        margin: 0 0 15px 0;
        line-height: 1.3;
        min-height: 2.5em;
    }
    .event-card-info {
        margin-top: 15px;
        color: #495057;
        display: flex;
        align-items: center;
        padding: 15px 0;
        border-top: 1px solid #f0f0f0;
        margin-top: auto;
    }
    
    .event-card-info i {
        margin-right: 10px;
        color: #D32F2F;
        font-size: 1rem;
    }

    /* ============== CTA SECTION STYLES ============== */
    .cta-section {
        background: linear-gradient(135deg, #D32F2F 0%, #a32424 50%, #8B0000 100%);
        color: white;
        text-align: center;
        padding: 50px 20px;
        position: relative;
        overflow: hidden;
    }

    .cta-section .container {
        position: relative;
        z-index: 2;
    }

    .cta-section h2 {
        color: white;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 20px;
        text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    }

    .cta-section p {
        max-width: 600px;
        margin: 0 auto 30px;
        font-size: 1.1rem;
        line-height: 1.6;
        color: rgba(255,255,255,0.95);
    }

    .cta-buttons {
        display: flex;
        justify-content: center;
        gap: 25px;
        flex-wrap: wrap;
        margin-top: 30px;
    }

    .cta-btn {
        padding: 16px 32px;
        border-radius: 30px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        min-width: 200px;
        height: 56px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        box-sizing: border-box;
    }

    .cta-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }

    .cta-btn:hover::before {
        left: 100%;
    }

    .cta-btn-primary {
        background: #ffc107;
        color: #000;
        border: 2px solid #ffc107;
        box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
    }

    .cta-btn-primary:hover {
        background: #ffca2c;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 193, 7, 0.4);
    }

    .cta-btn-secondary {
        background: #ffffff;
        border: 2px solid #D32F2F;
        color: #D32F2F;
        box-shadow: 0 4px 15px rgba(211, 47, 47, 0.2);
    }

    .cta-btn-secondary:hover {
        background: #f8f9fa;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(211, 47, 47, 0.3);
    }

    .cta-btn i {
        font-size: 1.2rem;
        transition: transform 0.3s ease;
    }

    .cta-btn:hover i {
        transform: translateX(5px);
    }

    /* ============== ADMISSIONS PAGE STYLES ============== */
    .admissions-page {
        padding: 0;
        background-color: #fff;
    }
    .admissions-journey-banner {
        background: linear-gradient(rgba(58, 93, 124, 0.8), rgba(58, 93, 124, 0.8)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        color: white;
        text-align: center;
        padding: 80px 20px;
        position: relative;
    }
    .admissions-journey-banner h2 {
        color: white;
        font-size: 3.2rem;
        margin-bottom: 15px;
        text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
        font-weight: 700;
    }
    .admissions-journey-banner p {
        font-size: 1.3rem;
        opacity: 0.95;
        text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
        max-width: 600px;
        margin: 0 auto;
    }
    .admissions-section {
        padding: 60px 20px;
        background-color: #f8f9fa;
    }
    .admissions-section .section-title {
        text-align: center;
        margin-bottom: 10px;
        font-size: 2.2rem;
        font-weight: 700;
    }
    .admissions-section .section-tagline {
        text-align: center;
        margin-bottom: 50px;
        color: #495057;
    }
    .process-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        margin-bottom: 60px;
    }
    .process-card {
        background: #fff;
        padding: 30px;
        border-radius: 10px;
        text-align: center;
        border: 1px solid #eee;
        border-top: 4px solid #dc3545;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .process-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.1);
    }
    .process-number {
        width: 40px;
        height: 40px;
        background-color: #dc3545;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 auto 20px;
    }
    .process-card h3 {
        color: #212529;
        margin-bottom: 15px;
    }
    .process-card p {
        font-size: 0.95rem;
        color: #495057;
        margin-bottom: 25px;
        min-height: 90px;
    }
    .process-btn {
        background-color: #dc3545;
        color: white;
        padding: 10px 25px;
        border-radius: 20px;
        text-decoration: none;
        font-weight: 600;
        transition: background-color 0.3s;
    }
    .process-btn:hover {
        background-color: #ffc107;
        color: #212529;
    }
    .details-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
    }
    .details-card {
        background: #fff;
        padding: 30px;
        border-radius: 10px;
        border: 1px solid #eee;
        border-top: 4px solid #dc3545;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .details-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.1);
    }
    .details-card h3 {
        display: flex;
        align-items: center;
        gap: 15px;
        color: #212529;
    }
    .details-icon {
        width: 40px;
        height: 40px;
        background-color: #dc3545;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
    }
    .details-list {
        list-style: none;
        padding: 0;
        margin: 20px 0;
    }
    .details-list li {
        margin-bottom: 10px;
        color: #495057;
        display: flex;
        align-items: flex-start;
    }
    .details-list li::before {
        content: '✓';
        color: #28a745;
        margin-right: 10px;
        font-weight: 700;
    }
    .details-card.important-dates .details-list li::before {
        content: "•";
        color: #ccc;
        font-size: 1.2rem;
        line-height: 1.4;
    }
    .details-btn {
        display: inline-block;
        padding: 12px 28px;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 600;
        text-align: center;
        transition: all 0.3s;
        border: none;
        cursor: pointer;
    }
    .btn-red {
        background-color: #dc3545;
        color: white;
    }
    .btn-red:hover {
        background-color: #ffc107;
        color: #212529;
    }
    
    .details-btn {
        display: inline-block;
        padding: 12px 28px;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 600;
        text-align: center;
        transition: all 0.3s;
        border: none;
        cursor: pointer;
        margin: 0 10px;
    }
    
    .btn-red-cta {
        background-color: #dc3545;
        color: white;
    }
    
    .btn-red-cta:hover {
        background-color: #ffc107;
        color: #212529;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(211, 47, 47, 0.3);
    }
    
    .btn-secondary {
        background-color: #6c757d;
        color: white;
    }
    
    .btn-secondary:hover {
        background-color: #5a6268;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(108, 117, 125, 0.3);
    }
    
    .admissions-cta {
        text-align: center;
        margin-top: 30px;
        padding: 40px 20px;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        margin: 30px 20px 0;
        border: 1px solid #dee2e6;
        position: relative;
    }
    
    .admissions-cta::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: linear-gradient(90deg, #D32F2F, #C0A062);
        border-radius: 0 0 2px 2px;
    }
    .admissions-cta h3 {
        font-size: 1.6rem;
        margin-bottom: 15px;
    }
    .admissions-cta p {
        font-size: 1rem;
        color: #495057;
        margin-bottom: 20px;
    }
    .admissions-cta .btn-red-cta {
        background-color: #dc3545;
        color: white;
    }
    .admissions-cta .btn-red-cta:hover {
        background-color: #ffc107;
        color: #212529;
    }
    .admissions-cta .btn-secondary {
        background: #dc3545;
        border: 2px solid #dc3545;
        color: white;
        margin-left: 10px;
    }
    .admissions-cta .btn-secondary:hover {
        background: #c82333;
        border-color: #c82333;
        color: white;
    }
    
    /* ============== FACULTY PAGE STYLES ============== */
    .faculty-page {
        padding: 0;
        background-color: #fff;
    }
    .faculty-header {
        padding: 80px 20px;
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
        background-size: cover;
        background-position: center;
        text-align: center;
        color: white;
    }
    .faculty-header h2 {
        font-size: 3rem;
        color: white;
        margin: 0;
    }
    .faculty-header p {
        font-size: 1.1rem;
        max-width: 600px;
        margin: 10px auto 0;
    }
    .faculty-box {
        background: #fff;
        border-radius: 15px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        border: 1px solid #e8e8e8;
        margin: 20px;
        overflow: hidden;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .faculty-box:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 40px rgba(0,0,0,0.15);
    }
    
    .faculty-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 60px 20px;
        max-width: 900px;
        margin: 0 auto;
    }
    .faculty-card {
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
    .faculty-image {
        width: 150px;
        height: 150px;
        object-fit: cover;
        object-position: top;
        margin-right: 25px;
        flex-shrink: 0;
    }
    .faculty-content {
        text-align: left;
    }
    .faculty-content h3 {
        margin: 0 0 5px;
        color: #212529;
        font-size: 1.5rem;
        font-weight: 600;
        transition: color 0.3s ease;
        cursor: pointer;
    }
    
    .faculty-content h3:hover {
        color: #D32F2F;
    }
    .faculty-content .title {
        color: #f0ad4e;
        font-weight: 600;
        margin-bottom: 15px;
        font-size: 1.1rem;
        display: block;
    }
    .faculty-content p {
        font-size: 0.95rem;
        color: #495057;
        margin-bottom: 15px;
        line-height: 1.8;
    }
    .faculty-social {
        margin-top: auto;
        display: flex;
        gap: 15px;
    }
    .faculty-social a {
        color: #d9534f;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-color: #f0f0f0;
        text-decoration: none;
        font-size: 1.5rem;
        transition: all 0.3s ease;
    }
    .faculty-social a:hover {
        background-color: #d9534f;
        color: #fff;
    }

    /* ============== DEPARTMENTS PAGE STYLES ============== */
    .departments-page {
        padding: 0;
        background-color: #f8f9fa;
    }
    .department-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 25px;
        padding: 40px 20px;
        max-width: 1200px;
        margin: 0 auto;
        justify-items: center;
    }
    
    .department-card {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        overflow: hidden;
        transition: all 0.3s ease;
        padding: 0;
        border: none;
        border-top: 3px solid #D32F2F;
        width: 100%;
        max-width: 380px;
        min-height: 450px;
        display: flex;
        flex-direction: column;
    }
    
    .department-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    }
    .department-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 12px 12px 0 0;
        margin-bottom: 0;
        filter: none;
    }
    .department-card-content {
        padding: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .department-card-content h3 {
        font-size: 1.2rem;
        margin: 0 0 8px;
        color: #212529;
        line-height: 1.2;
        font-weight: 600;
    }
    .department-card-content p {
        color: #495057;
        font-size: 0.9rem;
        line-height: 1.4;
        margin-bottom: 12px;
    }
    .department-card-content strong {
        color: #212529;
        font-size: 0.85rem;
        margin-bottom: 8px;
        display: block;
        font-weight: 600;
    }
    .department-card-content ul {
        padding-left: 18px;
        color: #495057;
        font-size: 0.85rem;
        line-height: 1.4;
        margin-bottom: 20px;
        flex: 1;
    }
    .department-card-content li {
        margin-bottom: 3px;
    }
    .department-card-content a {
        color: #D32F2F;
        text-decoration: none;
        font-weight: 600;
        padding: 10px 20px;
        background: #D32F2F;
        color: #fff;
        border: none;
        border-radius: 6px;
        text-align: center;
        transition: all 0.3s ease;
        margin-top: auto;
        align-self: flex-start;
        font-size: 0.9rem;
    }
    .department-card-content a:hover {
        background: #B71C1C;
        text-decoration: none;
    }

    /* ============== FORM STYLES ============== */
    .form-page {
        padding: 0;
        background-color: #f8f9fa;
    }
    
    .form-page .page-banner {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        color: white;
        padding: 50px 20px;
        text-align: center;
        position: relative;
        width: 100%;
    }
    
    .form-page .page-banner h2 {
        color: white;
        font-size: 2.5rem;
        margin-bottom: 10px;
        font-weight: 600;
    }
    
    .form-page .page-banner p {
        max-width: 600px;
        margin: 0 auto 20px;
        font-size: 1rem;
    }
    
    .form-grid {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 40px;
        padding: 40px 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .form-info {
        background: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
        border: none;
    }
    
    .form-info h3 {
        color: #212529;
        margin-bottom: 12px;
        font-size: 1.3rem;
        font-weight: 600;
        text-align: center;
        position: relative;
    }
    
    .form-info h3::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 2px;
        background: #D32F2F;
        border-radius: 1px;
    }
    
    .form-info p {
        color: #495057;
        margin-bottom: 15px;
        line-height: 1.4;
        text-align: center;
        font-size: 0.9rem;
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .info-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 1px;
        padding: 3px 0;
        border-bottom: 1px solid #f0f0f0;
        transition: all 0.3s ease;
        min-height: 30px;
    }
    
    .info-item:hover {
        border-bottom-color: #D32F2F;
        transform: translateX(3px);
    }
    
    .info-item:last-child {
        border-bottom: none;
    }
    
    .info-icon {
        width: 35px;
        height: 35px;
        background: transparent;
        color: #D32F2F;
        border-radius: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        flex-shrink: 0;
        transition: all 0.3s ease;
        margin-top: 2px;
    }
    
    .info-item:hover .info-icon {
        transform: scale(1.05);
        color: #a32424;
    }
    
    .info-content {
        flex: 1;
        min-width: 0;
    }
    
    .info-item strong {
        color: #212529;
        font-weight: 600;
        display: block;
        margin-bottom: 5px;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 0.2px;
    }
    
    .info-item span {
        color: #495057;
        line-height: 1.5;
        font-size: 0.9rem;
        display: block;
    }
    
    .info-item.special {
        background: transparent;
        padding: 0;
        text-align: center;
        border: none;
        margin: 15px 0;
    }
    
    .info-item.special strong {
        color: #212529;
        font-weight: 700;
        text-transform: none;
        font-size: 1rem;
        letter-spacing: normal;
    }
    
    .social-icons {
        display: flex;
        gap: 12px;
        margin-top: 12px;
        justify-content: center;
    }
    
    .social-icons a {
        color: #D32F2F;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: #fff;
        text-decoration: none;
        font-size: 1.1rem;
        border: none;
        box-shadow: none;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .social-icons a:hover {
        color: #fff;
        background: #D32F2F;
        transform: scale(1.1);
        box-shadow: 0 2px 8px rgba(211, 47, 47, 0.2);
    }
    
    .form-container {
        background: #fff;
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.06);
        border: none;
        position: relative;
    }
    
    .form-container h3 {
        color: #000000;
        margin-bottom: 15px;
        font-size: 1.3rem;
        font-weight: 700;
        text-align: left;
        font-family: 'Inter', sans-serif;
        border-bottom: none;
        padding-bottom: 0;
    }
    
    .form-group {
        margin-bottom: 12px;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 3px;
        color: #333;
        font-weight: 400;
        font-size: 0.85rem;
        font-family: 'Inter', sans-serif;
    }
    
    .form-group input,
    .form-group textarea,
    .form-group select {
        width: 100%;
        padding: 7px 10px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 0.85rem;
        font-family: 'Inter', sans-serif;
        transition: border-color 0.2s ease;
        box-sizing: border-box;
        background: #fff;
        color: #333;
    }
    
    .form-group input:focus,
    .form-group textarea:focus,
    .form-group select:focus {
        outline: none;
        border-color: #D32F2F;
        background: #fff;
        box-shadow: none;
    }
    
    .form-group textarea {
        min-height: 70px;
        resize: vertical;
        line-height: 1.3;
    }
    
    .submit-btn {
        background: #D32F2F;
        color: white;
        border: none;
        padding: 9px 18px;
        border-radius: 6px;
        font-weight: 600;
        font-size: 0.9rem;
        font-family: 'Inter', sans-serif;
        cursor: pointer;
        transition: all 0.2s ease;
        width: auto;
        display: block;
        margin: 0 auto;
        margin-top: 8px;
        text-align: center;
        box-shadow: none;
        letter-spacing: 0.3px;
    }
    
    .submit-btn:hover {
        background: #a32424;
        color: white;
        transform: none;
        box-shadow: none;
    }
    
    .submit-btn:disabled {
        background: #6c757d;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }
    
    .form-message {
        margin-top: 20px;
        padding: 15px;
        border-radius: 8px;
        text-align: center;
        font-weight: 600;
    }
    
    .form-message.success {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    
    .form-message.error {
        background: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
    
    /* ============== FOOTER STYLES ============== */
    .site-footer {
        background: #212529;
        color: #fff;
        padding: 60px 0 20px;
    }
    
    .footer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 40px;
        margin-bottom: 40px;
    }
    
    .footer-column h3 {
        color: #fff;
        margin-bottom: 20px;
        font-size: 1.2rem;
        font-weight: 600;
    }
    
    .footer-column p {
        color: #adb5bd;
        line-height: 1.6;
        margin-bottom: 20px;
    }
    
    .footer-column ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .footer-column ul li {
        margin-bottom: 10px;
    }
    
    .footer-column ul li a {
        color: #adb5bd;
        text-decoration: none;
        transition: color 0.3s ease;
    }
    
    .footer-column ul li a:hover {
        color: #D32F2F;
    }
    
    .footer-nav-link {
        color: #adb5bd;
        text-decoration: none;
        transition: color 0.3s ease;
        font-size: 0.9rem;
    }
    
    .footer-nav-link:hover {
        color: #D32F2F;
    }
    
    .newsletter-form {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }
    
    .newsletter-form input {
        flex: 1;
        padding: 10px 15px;
        border: 1px solid #495057;
        border-radius: 6px;
        background: #343a40;
        color: #fff;
        font-size: 0.9rem;
    }
    
    .newsletter-form input::placeholder {
        color: #adb5bd;
    }
    
    .newsletter-form button {
        background: #D32F2F;
        color: #fff;
        border: none;
        padding: 10px 15px;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.3s ease;
        font-size: 1.2rem;
    }
    
    .newsletter-form button:hover {
        background: #a32424;
    }
    
    .newsletter-message {
        color: #28a745;
        font-size: 0.9rem;
        margin-top: 10px;
    }
    
    .newsletter-note {
        color: #6c757d;
        font-size: 0.8rem;
        margin-top: 15px;
        font-style: italic;
    }
    
    .footer-bottom {
        border-top: 1px solid #495057;
        padding-top: 20px;
        color: #adb5bd;
        font-size: 0.9rem;
    }
    
    .footer-bottom-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
    }
    
    .footer-bottom-links {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
    
    .footer-bottom a {
        color: #adb5bd;
        text-decoration: none;
        margin: 0 10px;
        transition: color 0.3s ease;
    }
    
    .footer-bottom a:hover {
        color: #D32F2F;
    }
    
    /* ============== FOOTER RESPONSIVE STYLES ============== */
    @media (max-width: 768px) {
        .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
        }
        
        .footer-column {
            text-align: center;
        }
        
        .newsletter-form {
            flex-direction: column;
            gap: 15px;
        }
        
        .newsletter-form button {
            width: 100%;
        }
        
        .footer-bottom {
            font-size: 0.8rem;
        }
        
        .footer-bottom a {
            display: block;
            margin: 5px 0;
        }
        
        .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 15px;
        }
        
        .footer-bottom-links {
            justify-content: center;
        }
    }
    
    @media (max-width: 480px) {
        .site-footer {
            padding: 40px 0 20px;
        }
        
        .footer-grid {
            gap: 25px;
        }
        
        .footer-column h3 {
            font-size: 1.1rem;
        }
    }
    
    /* ============== PAGE BANNER STYLES ============== */
    .programs-banner {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    }
    
    .departments-banner {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    }
    
    .contact-banner {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    }
    
    .tour-banner {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    }
    
    /* ============== RESPONSIVE STYLES ============== */
    @media (max-width: 1100px) {
        .header nav ul {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .header nav ul.active {
            display: flex;
        }
        .header nav ul li {
            margin: 0;
            width: 100%;
            text-align: center;
        }
        .header nav ul li a {
            padding: 15px;
            display: block;
            border-bottom: 1px solid #eee;
        }
        .menu-toggle {
            display: block;
        }
    }
    
    @media (max-width: 992px) {
        .process-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
        .logo-title {
            font-size: 20px;
        }
        .container {
            max-width: 100%;
            padding: 0 15px;
        }
    }

    @media (min-width: 576px) {
        .faculty-card {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
        }
    }

    @media (max-width: 768px) {
        .logo-title {
            font-size: 18px;
        }
        .logo-crest {
            height: 50px;
        }
        .form-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 40px 20px;
        }
        
        .form-info, .form-container {
            padding: 30px;
        }
        
        .form-page .page-banner h2 {
            font-size: 2.5rem;
        }
        
        .form-page .page-banner p {
            font-size: 1.1rem;
        }
        .program-cards-grid, .courses-grid, .research-grid, .events-grid, .department-grid {
            grid-template-columns: 1fr;
            gap: 20px;
        }
        .category-header h3 {
            font-size: 2rem;
        }
        .category-header p {
            font-size: 1.1rem;
        }
        .program-card-content {
            padding: 20px;
        }
        .glance-label {
            font-size: clamp(1.2rem, 3vw, 1.5rem);
        }
        .glance-main {
            font-size: clamp(2rem, 6vw, 3rem);
        }
        .hero p {
            font-size: 1.2rem;
        }

        .hero {
            padding: 60px 20px;
            min-height: 60vh;
        }
        
        .page-banner {
            padding: 60px 20px;
        }
        .page-banner h2 {
            font-size: 2.5rem;
        }
        .admissions-journey-banner h2, .faculty-header h2 {
            font-size: 2.5rem;
        }
        
        .overview-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }
        
        .overview-stats .stat-number {
            font-size: 2rem;
        }
        
        .search-filter-container {
            flex-direction: column;
            gap: 15px;
        }
        
        .search-box {
            min-width: 100%;
        }
        
        .category-filter select {
            min-width: 100%;
        }
        
        .modal-header {
            flex-direction: column;
            text-align: center;
        }
        
        .modal-image {
            width: 100px;
            height: 100px;
        }
        
        .modal-content {
            max-width: 95vw;
        }
    }
    
    @media (min-width: 768px) {
        .about-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        .footer-grid {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }
        .form-grid {
            grid-template-columns: 1fr 1.5fr;
        }
    }

    @media (max-width: 480px) {
        .container {
            padding: 0 10px;
        }
        .hero {
            padding: 60px 15px;
        }
        .page-banner {
            padding: 40px 15px;
        }
        section {
            padding: 20px 15px;
        }
        .program-card-content {
            padding: 15px;
        }
        
        .overview-stats {
            grid-template-columns: 1fr;
            gap: 15px;
        }
        
        .overview-stats .stat-number {
            font-size: 1.8rem;
        }
        
        .modal-body {
            padding: 20px;
        }
        
        .modal-footer {
            padding: 20px;
            flex-direction: column;
        }
        
        .btn-apply-large {
            width: 100%;
        }
        .form-container {
            padding: 25px;
        }
    }
  `}</style>
);

// ============== FONT AWESOME LOADER COMPONENT ==============
const FontAwesomeLoader = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        document.head.appendChild(link);

        const link2 = document.createElement('link');
        link2.rel = 'stylesheet';
        link2.href = 'https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css';
        document.head.appendChild(link2);

        return () => {
            document.head.removeChild(link);
            document.head.removeChild(link2);
        };
    }, []);

    return null;
};

// ============== HEADER COMPONENT ==============
const Header = ({ activePage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className="header">
      <div className="container">
        <Link to="/home" className="logo-container" onClick={handleNavClick}>
          <img src="https://i.ibb.co/cSBD74Mm/Red-Yellow-Vintage-Classic-School-Academy-Logo.png" alt="IGT Logo" className="logo-crest" />
          <div className="logo-text-container">
            <h1 className="logo-title">INSTITUTE OF GLOBAL TECHNOLOGY</h1>
            <p className="logo-tagline">Gateway to Excellence in Education</p>
          </div>
        </Link>
        <nav>
          <ul className={isMenuOpen ? 'active' : ''}>
                            <li><Link to="/home" className={activePage === '/home' ? 'active' : ''} onClick={handleNavClick}>Home</Link></li>
            <li><Link to="/programs" className={activePage === '/programs' ? 'active' : ''} onClick={handleNavClick}>Programs</Link></li>
            <li><Link to="/departments" className={activePage === '/departments' ? 'active' : ''} onClick={handleNavClick}>Departments</Link></li>
            <li><Link to="/faculty" className={activePage === '/faculty' ? 'active' : ''} onClick={handleNavClick}>Faculty</Link></li>
            <li><Link to="/admissions" className={activePage === '/admissions' ? 'active' : ''} onClick={handleNavClick}>Admissions</Link></li>
            <li><Link to="/contact" className={activePage === '/contact' ? 'active' : ''} onClick={handleNavClick}>Contact</Link></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open Menu">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

// ============== HERO COMPONENT ==============
const Hero = () => (
    <section id="hero" className="hero">
        <div className="hero-content">
            <div className="hero-title-glance">
                <div className="glance-line">
                    <span className="glance-label">WELCOME TO</span>
                </div>
                <div className="glance-line">
                    <span className="glance-main">INSTITUTE OF</span>
                </div>
                <div className="glance-line">
                    <span className="glance-main">GLOBAL TECHNOLOGY</span>
                </div>
            </div>
            
            <div className="hero-glance-content">
                <div className="hero-description">
                    <p>Empowering students through cutting-edge technology education, innovative research, and holistic development for a brighter future.</p>
                </div>
                
                <div className="hero-accredited">ACCREDITED BY AIAB EUROPE</div>
            </div>
        </div>
    </section>
);


// ============== ABOUT COMPONENT ==============
const About = () => (
  <section id="about" className="about">
    <div className="container">
      <h2>ABOUT INSTITUTE OF GLOBAL TECHNOLOGY</h2>
      <p className="section-subtitle">Discover our mission, vision, and values that guide us in providing exceptional technology education</p>
      <div className="about-grid">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Institute of Global Technology Campus" />
        </div>
        <div className="about-content">
          <h3>Transforming Technology Education Since 2005</h3>
          <p>The Institute of Global Technology was established with a vision to create a center of excellence in technology education that caters to the evolving needs of industry and society. Over the years, we have grown into a premier institution known for our academic rigor, innovative pedagogy, and commitment to student success.</p>
          <p>Our campus provides a vibrant learning environment with state-of-the-art facilities, experienced faculty, and numerous opportunities for research and professional development in emerging technologies.</p>
          <p className="accredited-text">ACCREDITED BY AIAB EUROPE</p>
          <div className="stats-container">
            <div className="stat-item">
              <div className="number">6000+</div>
              <div className="label">STUDENTS</div>
            </div>
            <div className="stat-item">
              <div className="number">300+</div>
              <div className="label">FACULTY</div>
            </div>
            <div className="stat-item">
              <div className="number">60+</div>
              <div className="label">PROGRAMS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============== WHY CHOOSE US COMPONENT ==============
const WhyChooseUs = () => (
  <section id="why-choose-us" className="why-choose-us">
    <div className="container">
      <h2>Why Choose Us<span className="question-mark">?</span></h2>
      <div className="features-grid">
        <div className="feature-item">
          <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Industrial Partners" />
          <div className="feature-content">
            <h3>100+ Industrial Partners</h3>
            <p>Strong collaborations with leading technology companies for research and placements.</p>
          </div>
        </div>
        <div className="feature-item">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Expert Faculty" />
          <div className="feature-content">
            <h3>Learn from Experts</h3>
            <p>Instruction from national and international experts in their respective fields.</p>
          </div>
        </div>
        <div className="feature-item">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Placement Support" />
          <div className="feature-content">
            <h3>Placement Assistance</h3>
            <p>Complete placement support with career counseling and interview preparation.</p>
          </div>
        </div>
        <div className="feature-item">
          <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Advanced Research" />
          <div className="feature-content">
            <h3>Advanced Research</h3>
            <p>Opportunities to work on innovative research projects with commercialization potential.</p>
          </div>
        </div>
        <div className="feature-item">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Entrepreneurship Support" />
          <div className="feature-content">
            <h3>Entrepreneurship Support</h3>
            <p>Incubation center and mentorship for student startups and innovations.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============== PROGRAMS DATA ==============
const programsData = [
    {
        category: "Precision Agriculture",
        subtitle: "Innovative programs combining technology with modern agricultural practices",
        courses: [
            { title: "MASTER PROGRAM in Precision Agriculture", image: "https://www.innominds.com/hs-fs/hubfs/Innominds-201612/img/IM-News-and-Blogs/AI-Applications-in-Precision-Agriculture.jpg?width=800&name=AI-Applications-in-Precision-Agriculture.jpg", duration: "12 Months", description: "Master data-driven farming techniques using IoT, sensors, and AI for crop optimization. Learn advanced soil monitoring, weather prediction, and automated irrigation systems to maximize crop yields while minimizing resource waste." },
            { title: "MASTER PROGRAM in Agriculture Drones", image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "12 Months", description: "Train in drone piloting, imaging, and data analysis for agricultural applications. Master flight planning, multispectral imaging, and thermal sensing for crop health monitoring." },
            { title: "MASTER PROGRAM in Hydroponics & Vertical Farming", image: "https://images.squarespace-cdn.com/content/v1/63064607eb816a4d50027fd1/1694614709295-LDS94MIWACFJ3TZH177O/eden-green-vertical-farm-facility.jpg", duration: "12 Months", description: "Learn sustainable farming techniques without soil in controlled environments. Master nutrient solution management, climate control systems, and vertical stacking technologies for urban agriculture." },
            { title: "MASTER PROGRAM in AI & ML in Agriculture", image: "https://sageuniversity.edu.in/assets/images/blog/role-of-artificial-intelligence-in-agriculture.jpg", duration: "12 Months", description: "Apply artificial intelligence and machine learning to solve agricultural challenges. Master predictive analytics for crop diseases, yield forecasting, and resource optimization." },
            { title: "MASTER PROGRAM in Agriculture Robotics", image: "https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg", duration: "12 Months", description: "Develop and implement robotic solutions for planting, harvesting, and farm automation. Master robotic arm programming, computer vision integration, and autonomous navigation systems." },
            { title: "MASTER PROGRAM in Advanced Technologies in Agriculture", image: "https://sageuniversity.edu.in/assets/images/blog/use-of-modern-technology-in-agriculture.webp", duration: "12 Months", description: "Explore cutting-edge technologies transforming modern agriculture. Master blockchain for supply chain transparency, IoT for smart farming, and biotechnology for crop improvement." },
            { title: "MASTER PROGRAM in Agri Entrepreneurship", image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "12 Months", description: "Develop business skills specific to agricultural ventures and startups. Master market analysis, financial planning, and sustainable business models for agribusiness." },
        ]
    },
    {
        category: "AI & Robotics",
        subtitle: "Specialized programs in artificial intelligence and robotic systems",
        courses: [
            { title: "MASTER PROGRAM in AI & Robotics", image: "https://www.technetexperts.com/wp-content/uploads/2024/08/AI-And-Robotics-1024x574.jpg", duration: "12 Months", description: "Comprehensive training in AI-driven robotic systems and automation. Master machine learning algorithms for robotic control and autonomous decision-making in industrial applications." },
            { title: "MASTER PROGRAM in Generative AI", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "12 Months", description: "Master the creation of AI models that generate text, images, and media. Learn advanced techniques in natural language processing, computer vision, and creative AI applications for content generation." },
            { title: "MASTER PROGRAM in AI & Blockchain", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "12 Months", description: "Explore the convergence of AI and decentralized blockchain technologies. Master smart contract development, AI-powered blockchain analytics, and decentralized AI systems for secure applications." },
            { title: "MASTER PROGRAM in AI & Data Analytics", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "12 Months", description: "Apply AI techniques to extract insights from complex datasets. Master predictive modeling, statistical analysis, and machine learning algorithms for business intelligence and decision-making." },
            { title: "MASTER PROGRAM in AI & Biological Sciences", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "12 Months", description: "Apply AI to biological research, drug discovery, and genetic analysis. Master bioinformatics algorithms, protein structure prediction, and AI-driven drug screening for pharmaceutical development." },
            { title: "MASTER PROGRAM in AI & Cybersecurity Systems", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "12 Months", description: "Develop AI-powered solutions for cybersecurity threats and vulnerabilities. Master threat detection algorithms, anomaly identification, and automated security response systems for network protection." },
        ]
    },
    {
        category: "AI & Business",
        subtitle: "Programs at the intersection of artificial intelligence and business applications",
        courses: [
            { title: "MASTER PROGRAM in AI & Business", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "12 Months", description: "Transform business operations with AI-driven strategies and solutions. Master process automation, customer analytics, and AI-powered decision support systems for competitive advantage." },
            { title: "MASTER PROGRAM in AI & Management Studies", image: "https://uks.bunts.edu.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-4.23.10-PM.jpeg", duration: "12 Months", description: "Apply AI to organizational leadership, decision-making, and strategy. Master AI-driven management tools, predictive analytics for strategic planning, and intelligent automation for operational efficiency." },
            { title: "MASTER PROGRAM in AI & Law", image: "https://aitoolsnetwork.com/wp-content/uploads/2023/05/ai-for-lawyers.jpg", duration: "12 Months", description: "Explore the legal implications and applications of artificial intelligence. Master legal tech tools, AI ethics frameworks, and regulatory compliance for emerging AI technologies." },
            { title: "MASTER PROGRAM in IP Law", image: "https://blog.ipleaders.in/wp-content/uploads/2021/05/Intellectual-Property-Rights-in-India-1280x720-1.jpg", duration: "12 Months", description: "Specialize in intellectual property law for technology and innovation. Master patent law, copyright protection, and trademark strategies for emerging technologies and digital assets." },
            { title: "MASTER PROGRAM in AI & Marketing", image: "https://www.marketingevolution.com/hs-fs/hubfs/iStock-1462024468.jpg?width=1060&height=708&name=iStock-1462024468.jpg", duration: "12 Months", description: "Leverage AI for customer insights, personalization, and campaign optimization. Master predictive customer analytics, automated marketing workflows, and AI-driven content generation for targeted campaigns." },
        ]
    },
    {
        category: "Healthcare & Life Sciences",
        subtitle: "Programs at the intersection of technology and life sciences",
        courses: [
            { title: "MASTER PROGRAM in Clinical Research & Regulatory Affairs", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "12 Months", description: "Gain expertise in clinical trials and pharmaceutical regulations. Master clinical trial design, regulatory compliance, and drug development processes for global pharmaceutical markets." },
            { title: "MASTER PROGRAM in Medical Coding", image: "https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg", duration: "12 Months", description: "Learn standardized coding systems for healthcare documentation. Master ICD-10, CPT coding, and healthcare billing systems for accurate medical record management and insurance processing." },
            { title: "MASTER PROGRAM in Digital Forensics", image: "https://prd-cyberhub.oss-me-central-1.aliyuncs.com/uploads/CFTi7_AR4EQQE__jPvw8tUUxDtQ1af", duration: "12 Months", description: "Investigate cybercrimes and recover digital evidence. Master forensic tools, evidence preservation techniques, and legal procedures for digital crime investigation and prosecution." },
            { title: "MASTER PROGRAM in Industrial Fermentation Technology", image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "12 Months", description: "Master microbial processes for food, pharmaceuticals, and biofuels. Learn bioreactor design, process optimization, and quality control for large-scale fermentation operations." },
            { title: "MASTER PROGRAM in Vaccine Technology", image: "https://sitescdn.wearevennture.co.uk/public/mrl/mediahub/vaccinehd.png", duration: "12 Months", description: "Study vaccine development, production, and quality control. Master vaccine formulation, manufacturing processes, and regulatory standards for safe and effective immunization products." },
            { title: "MASTER PROGRAM in Bioentrepreneurship", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "12 Months", description: "Develop business ventures in biotechnology and life sciences. Master biotech business models, funding strategies, and commercialization pathways for innovative life science technologies." },
        ]
    },
    {
        category: "AI & Creative Technologies",
        subtitle: "Programs combining artificial intelligence with creative disciplines",
        courses: [
            { title: "MASTER PROGRAM in AI & Designing Technology", image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "12 Months", description: "Apply AI to product, graphic, and UX/UI design processes. Master AI-powered design tools, automated layout generation, and intelligent user experience optimization for modern digital products." },
            { title: "MASTER PROGRAM in AI & Arts", image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "12 Months", description: "Explore the intersection of artificial intelligence and creative arts. Master generative art algorithms, AI-assisted composition, and digital creativity tools for innovative artistic expression." },
        ]
    },
    {
        category: "Emerging Technologies & Smart Systems",
        subtitle: "Innovative programs in AR, VR, IoT, and intelligent systems shaping the future",
        courses: [
            { title: "Reality Architect: Master of AR/VR/XR Development", image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "12 Months", description: "Master immersive technologies to build future-ready AR, VR, and XR applications. Learn 3D modeling, spatial computing, and interactive design for creating engaging virtual experiences." },
            { title: "Virtual Vanguard: Master in Virtual & Augmented Reality Engineering", image: "https://caddcentre.com/blog/wp-content/uploads/2025/01/AR-VR-1-1.jpg", duration: "12 Months", description: "Engineer advanced virtual and augmented systems for industrial and consumer applications. Master hardware integration, software development, and user interface design for cutting-edge VR/AR solutions." },
            { title: "Game Changer: Master Program in XR Gaming", image: "https://gamecloud-ltd.com/wp-content/uploads/2024/04/Screenshot-2024-04-15-165122.jpg", duration: "12 Months", description: "Design and develop immersive games using XR technology and gamification strategy. Master game engine development, 3D asset creation, and interactive storytelling for next-generation gaming experiences." },
            { title: "Master Program in AR and Mixed Reality", image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", duration: "12 Months", description: "Specialize in designing cutting-edge MR life environments and interfaces. Master spatial computing, gesture recognition, and environmental mapping for seamless mixed reality experiences." },
            { title: "Master Program in Electric Vehicle Technology", image: "https://witricity.com/hs-fs/hubfs/EVs.png?width=1600&height=900&name=EVs.png", duration: "12 Months", description: "Learn about EV systems, battery design, automatic mobility, and energy management. Master electric powertrain design, battery management systems, and smart charging infrastructure for sustainable transportation." },
            { title: "Master Program in IoT and Embedded Systems", image: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2023/09/16045709/A-Step-By-Step-Tutorial-For-Building-Your-First-IoT-Embedded-System.webp", duration: "12 Months", description: "Build connected smart devices with microcontrollers, sensors, and communication protocols. Master embedded software development, wireless communication, and cloud integration for smart city and industrial IoT applications." },
            { title: "Master Program in Human-Computer Interaction", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "12 Months", description: "Focus on designing intuitive interfaces, enhancing user experiences, and usability testing. Master user research methodologies, interaction design principles, and accessibility standards for inclusive digital products." },
        ]
    },
    {
        category: "Doctoral & Postdoctoral Programs",
        subtitle: "Advanced research programs for scholars and fellows in science, engineering, and humanities",
        courses: [
            { title: "Doctoral Programs", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "Varies", description: "Research-focused degrees in multiple disciplines:", list: ["PhD in Engineering in ICT disciplines", "PhD in Science and Mathematics", "PhD in Humanities, Social Science and Design"] },
            { title: "Postdoctoral Programs", image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", duration: "Flexible", description: "Postdoctoral fellowships in emerging domains:", list: ["Wireless Communications, Embedded Systems", "AI, ML, and Information Security", "5G/6G, Robotics, VLSI, NLP, Adversarial ML"] },
        ]
    }
];

// ============== PROGRAM CARD COMPONENT ==============
const ProgramCard = ({ course, onDetailsClick }: ProgramCardProps & { onDetailsClick: () => void }) => (
    <div className="program-card">
        <img src={course.image} alt={course.title} className="program-card-image" />
        <div className="program-card-content">
            <h4>{course.title}</h4>
            <div className="program-card-duration">
                <i className="far fa-clock"></i>{course.duration}
            </div>
            <div className="program-card-description">
                {course.description}
                {course.list && (
                    <ul>
                        {course.list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="program-card-buttons">
                <button onClick={onDetailsClick} className="btn btn-details">Details</button>
                <a href="#" className="btn btn-apply">Apply</a>
            </div>
        </div>
    </div>
);

// ============== PROGRAM MODAL COMPONENT ==============
const ProgramModal = ({ course, onClose }: { course: Course; onClose: () => void }) => (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose} aria-label="Close modal" title="Close modal">
                <i className="fas fa-times"></i>
            </button>
            <div className="modal-header">
                <img src={course.image} alt={course.title} className="modal-image" />
                <div className="modal-title">
                    <h2>{course.title}</h2>
                    <div className="modal-meta">
                        <span><i className="far fa-clock"></i> {course.duration}</span>
                        <span><i className="fas fa-calendar-alt"></i> September 2025</span>
                        <span><i className="fas fa-users"></i> Limited Seats</span>
                    </div>
                </div>
            </div>
            <div className="modal-body">
                <div className="modal-description">
                    <h3>Program Overview</h3>
                    <p>{course.description}</p>
                </div>
                {course.list && (
                    <div className="modal-list">
                        <h3>Program Details</h3>
                        <ul>
                            {course.list.map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="modal-features">
                    <h3>Key Features</h3>
                    <div className="features-grid">
                        <div className="feature-item">
                            <i className="fas fa-graduation-cap"></i>
                            <span>Industry-Relevant Curriculum</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-users"></i>
                            <span>Expert Faculty</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-briefcase"></i>
                            <span>Career Support</span>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-globe"></i>
                            <span>Global Recognition</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button className="btn btn-apply-large">Apply Now</button>
                <button className="btn btn-secondary" onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
);


// ============== PROGRAMS COMPONENT (NOW A PAGE) ==============
const ProgramsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    const filteredPrograms = programsData.map(category => ({
        ...category,
        courses: category.courses.filter(course =>
            (selectedCategory === 'all' || category.category === selectedCategory) &&
            course.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.courses.length > 0);

    const openModal = (course: Course) => {
        setSelectedCourse(course);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedCourse(null);
    };

    return (
        <section id="programs" className="programs-page">
            <div className="page-banner programs-banner">
                <div className="container">
                    <h2>Transform Your Future</h2>
                    <p>Choose from our industry-focused postgraduate diplomas and gain cutting-edge skills for tomorrow's job market.</p>
                </div>
            </div>
            
            <div className="search-filter-section">
                <div className="container">
                    <div className="search-filter-container">
                        <div className="search-box">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                placeholder="Search programs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                aria-label="Search programs"
                            />
                        </div>
                        <div className="category-filter">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                aria-label="Filter by category"
                            >
                                <option value="all">All Categories</option>
                                {programsData.map((category, index) => (
                                    <option key={index} value={category.category}>
                                        {category.category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
            {filteredPrograms.length > 0 ? (
                filteredPrograms.map((category, categoryIndex) => (
                    <div key={`${category.category}-${categoryIndex}`} className="program-category">
                        <div className="container">
                            <div className="category-header">
                                <h3>{category.category}</h3>
                                <p>{category.subtitle}</p>
                            </div>
                            <div className="program-cards-grid">
                                {category.courses.map((course, courseIndex) => (
                                    <ProgramCard 
                                        key={`${course.title}-${courseIndex}`} 
                                        course={course}
                                        onDetailsClick={() => openModal(course)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="container no-results-container">
                    <h3 className="no-results-title">No programs found</h3>
                    <p className="no-results-message">
                        Try adjusting your search terms or category filter to find what you're looking for.
                    </p>
                    <button 
                        onClick={() => {
                            setSearchTerm('');
                            setSelectedCategory('all');
                        }}
                        className="clear-filters-btn"
                    >
                        Clear Filters
                    </button>
                </div>
            )}
            
            <div className="admissions-cta">
                <h3>Ready to take the next step?</h3>
                <p>Our admissions team is here to help you through every step of the process.</p>
                <button className="details-btn btn-red-cta" onClick={() => window.location.href = '/contact'}>Contact Admissions</button>
                <button className="details-btn btn-secondary" onClick={() => window.location.href = '/tour'}>Schedule Campus Tour</button>
            </div>
            
            {showModal && selectedCourse && (
                <ProgramModal course={selectedCourse} onClose={closeModal} />
            )}
        </section>
    );
};

// ============== ADMISSIONS PAGE COMPONENT ==============
const AdmissionsPage = () => {
    return (
        <section className="admissions-page">
            <div className="admissions-journey-banner">
                <div className="container">
                    <h2>Begin Your Academic Journey</h2>
                    <p>Join our community of innovators and thought leaders</p>
                </div>
            </div>
            <div className="admissions-section">
                <div className="container">
                    <h2 className="section-title">Admissions Process</h2>
                    <p className="section-tagline">Our streamlined admission process makes it easy to join our academic community</p>
                    <div className="process-grid">
                        <div className="process-card">
                            <div className="process-number">1</div>
                            <h3>Application</h3>
                            <p>Submit your online application along with required documents through our portal.</p>
                            <a href="#" className="process-btn">Apply Now →</a>
                        </div>
                        <div className="process-card">
                            <div className="process-number">2</div>
                            <h3>Review</h3>
                            <p>Our admissions committee will carefully evaluate your application and credentials.</p>
                            <a href="#" className="process-btn">Learn More →</a>
                        </div>
                        <div className="process-card">
                            <div className="process-number">3</div>
                            <h3>Interview</h3>
                            <p>Selected candidates will be invited for an interview (in-person or virtual).</p>
                            <a href="#" className="process-btn">Prepare →</a>
                        </div>
                        <div className="process-card">
                            <div className="process-number">4</div>
                            <h3>Decision</h3>
                            <p>Receive your admission decision within 2-4 weeks of your interview.</p>
                            <a href="#" className="process-btn">Timeline →</a>
                        </div>
                    </div>
                    
                    <h2 className="section-title">Admission Details</h2>
                    <p className="section-tagline">Key information to help you prepare your application</p>
                    <div className="details-grid">
                        <div className="details-card">
                            <h3><span className="details-icon"><i className="fas fa-file-alt"></i></span>Application Requirements</h3>
                            <ul className="details-list">
                                <li>Completed online application form</li>
                                <li>Bachelor's degree in relevant field with minimum 50% marks</li>
                                <li>Statement of purpose (500-1000 words)</li>
                                <li>Two letters of recommendation</li>
                                <li>Professional resume/CV</li>
                                <li>Application fee (waivers available)</li>
                            </ul>
                            <a href="#" className="details-btn btn-red">Download Checklist</a>
                        </div>
                        <div className="details-card important-dates">
                            <h3><span className="details-icon"><i className="fas fa-calendar-alt"></i></span>Important Dates</h3>
                            <ul className="details-list">
                                <li>Jul 15 Fall Semester Deadline</li>
                                <li>Nov 15 Spring Semester Deadline</li>
                                <li>Apr 15 Summer Semester Deadline</li>
                                <li>Dec 1 Early Decision Deadline</li>
                                <li>Aug 20-25 Orientation Week</li>
                            </ul>
                            <a href="#" className="details-btn btn-red">Add to Calendar</a>
                        </div>
                        <div className="details-card">
                            <h3><span className="details-icon"><i className="fas fa-university"></i></span>Tuition & Financial Aid</h3>
                            <ul className="details-list">
                                <li>Tuition: ₹1,50,000 per semester</li>
                                <li>Merit-based scholarships available</li>
                                <li>Research and teaching assistantships</li>
                                <li>Education loan partnerships</li>
                                <li>Flexible payment plans</li>
                            </ul>
                            <a href="#" className="details-btn btn-red">Financial Aid Information</a>
                        </div>
                    </div>

                    <div className="admissions-cta">
                        <h3>Ready to take the next step?</h3>
                        <p>Our admissions team is here to help you through every step of the process.</p>
                        <button className="details-btn btn-red-cta" onClick={() => window.location.href = '/contact'}>Contact Admissions</button>
                        <button className="details-btn btn-secondary" onClick={() => window.location.href = '/tour'}>Schedule Campus Tour</button>
                    </div>
                </div>
            </div>
        </section>
    );
};


// ============== CONTACT PAGE COMPONENT ==============
const ContactPage = () => {
    const [formStatus, setFormStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Basic validation for required fields (Name, Email, Message)
        if (!formData.name.trim()) {
            setFormStatus('Please enter your name.');
            setTimeout(() => setFormStatus(''), 5000);
            return;
        }
        
        if (!formData.email.trim()) {
            setFormStatus('Please enter your email address.');
            setTimeout(() => setFormStatus(''), 5000);
            return;
        }
        
        if (!formData.message.trim()) {
            setFormStatus('Please enter your message.');
            setTimeout(() => setFormStatus(''), 5000);
            return;
        }

        if (!formData.email.includes('@')) {
            setFormStatus('Please enter a valid email address.');
            setTimeout(() => setFormStatus(''), 5000);
            return;
        }

        setIsSubmitting(true);
        
        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            setFormStatus('Your message has been sent successfully! We will get back to you soon.');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            
            // Reset form
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            setFormStatus('Sorry, there was an error sending your message. Please try again.');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setFormStatus(''), 5000);
        }
    };

    return (
        <section className="form-page">
            <div className="page-banner contact-banner">
                <div className="container">
                    <h2>Get In Touch</h2>
                    <p>We're here to help and answer any question you might have.</p>
                </div>
            </div>
            <div className="container">
                <div className="form-grid">
                    <div className="form-info">
                        <h3>Contact Information</h3>
                        <p>Whether you have questions about admissions, programs, or campus life, our team is here to help. Reach out to us through any of the channels below.</p>
                        <div className="info-item">
                            <div className="info-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="info-content">
                                <strong>Address</strong>
                                <span>REGD. OFF.- 12, 1ST FLOOR, PLOT 96, MEHER BLDG. MARKET, DR. BABASAHEB AMBEDKAR ROAD, OPP. RANIBAUG, BYCULLA (E), MUMBAI - 11.</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="info-content">
                                <strong>Email</strong>
                                <span>admissions@igt.edu.in</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="info-content">
                                <strong>Timing</strong>
                                <span>Mon - Sat: 9:00 AM - 5:30 PM</span>
                            </div>
                        </div>
                        <div className="info-item special">
                            <strong>A UNIT OF BRC</strong>
                        </div>
                                <div className="social-icons">
                            {/* ===== SOCIAL MEDIA LINKS - CONNECT ACTUAL URLs HERE ===== */}
                            {/* Facebook Link - Replace # with actual Facebook page URL */}
                            <a href="#" aria-label="Facebook" title="Follow us on Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            
                            {/* Twitter Link - Replace # with actual Twitter profile URL */}
                            <a href="#" aria-label="Twitter" title="Follow us on Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            
                            {/* LinkedIn Link - Replace # with actual LinkedIn company page URL */}
                            <a href="#" aria-label="LinkedIn" title="Connect on LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            
                            {/* Instagram Link - Replace # with actual Instagram profile URL */}
                            <a href="#" aria-label="Instagram" title="Follow us on Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            
                            {/* YouTube Link - Replace # with actual YouTube channel URL */}
                            <a href="#" aria-label="YouTube" title="Watch our videos">
                                <i className="fab fa-youtube"></i>
                            </a>
                            {/* ===== END SOCIAL MEDIA LINKS ===== */}
                        </div>
                    </div>
                    <div className="form-container">
                        <h3>Send Us a Message</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required 
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required 
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="What is this regarding?"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required 
                                    placeholder="Tell us how we can help you"
                                    rows={5}
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <i className="fas fa-spinner fa-spin"></i>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                            {formStatus && (
                                <div className={`form-message ${formStatus.includes('error') ? 'error' : 'success'}`}>
                                    {formStatus}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ============== TOUR PAGE COMPONENT ==============
const TourPage = () => {
    const [formStatus, setFormStatus] = useState('');

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('Your tour has been scheduled successfully!');
        setTimeout(() => setFormStatus(''), 5000);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section className="form-page">
            <div className="page-banner tour-banner">
                <div className="container">
                    <h2>Schedule a Campus Tour</h2>
                    <p>We would love to show you around our campus.</p>
                </div>
            </div>
            <div className="container">
                <div className="form-grid">
                    <div className="form-info">
                        <h3>Visit Us</h3>
                        <p>Experience our vibrant campus and state-of-the-art facilities firsthand. A campus tour is the best way to get a feel for student life at IGT.</p>
                        <div className="info-item">
                            <strong><i className="fas fa-clock"></i> Tour Hours</strong>
                            <span>Monday - Friday: 10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="info-item">
                            <strong><i className="fas fa-map-marker-alt"></i> Location</strong>
                            <span>123 Tech Avenue, Innovation City</span>
                        </div>
                    </div>
                    <div className="form-container">
                        <h3>Book Your Visit</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Preferred Date</label>
                                <input type="date" id="date" name="date" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="time">Preferred Time</label>
                                <input type="time" id="time" name="time" required />
                            </div>
                             <div className="form-group">
                                <label htmlFor="guests">Number of Guests</label>
                                <select id="guests" name="guests">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5+</option>
                                </select>
                            </div>
                            <button type="submit" className="submit-btn">Schedule Tour</button>
                            {formStatus && <div className="form-message success">{formStatus}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


// ============== ACADEMIC PROGRAMS COMPONENT ==============
const AcademicPrograms = () => (
    <section id="academic-programs" className="academic-programs">
        <div className="container">
            <h2>Our Academic Programs</h2>
            <p className="section-subtitle">Explore our diverse range of postgraduate diploma programs in emerging technologies</p>
            <div className="programs-grid">
                <div className="program-card">
                    <div className="program-visual">
                        <img src="https://leadershiptribe.com/wp-content/uploads/2023/08/person-using-ai-tool-job-1.jpg" alt="AI & Management" />
                    </div>
                    <div className="program-content">
                        <h4>EU ACC Certificate Program in AI & Management</h4>
                        <p>Lead the AI Revolution in Your Industry with cutting-edge artificial intelligence and management strategies. Master machine learning, data analytics, and business transformation techniques.</p>
                        <button className="btn-details">Details</button>
                        <div className="program-info">
                            <div className="info-item">
                                <i className="fas fa-certificate"></i>
                                <span>Certificate Program</span>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-calendar-alt"></i>
                                <span>1st Sep - 30th Sep 2025</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="program-card">
                    <div className="program-visual">
                        <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="AR VR Technology" />
                    </div>
                    <div className="program-content">
                        <h4>EU ACC Master Program in AR & VR Technology</h4>
                        <p>Explore the Future of Immersive Technology through advanced augmented and virtual reality applications. Develop skills in 3D modeling, spatial computing, and interactive design.</p>
                        <button className="btn-details">Details</button>
                        <div className="program-info">
                            <div className="info-item">
                                <i className="fas fa-building"></i>
                                <span>100+ Industrial Partners</span>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-hands-helping"></i>
                                <span>10+ Hands-on Projects</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="program-card">
                    <div className="program-visual">
                        <img src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Agri Drones" />
                    </div>
                    <div className="program-content">
                        <h4>MASTER PROGRAM in Agri Drones</h4>
                        <p>Master Precision Agriculture with Drone Technology for sustainable farming. Learn aerial mapping, crop monitoring, automated spraying, and data-driven agricultural decision making.</p>
                        <button className="btn-details">Details</button>
                        <div className="program-info">
                            <div className="info-item">
                                <i className="fas fa-graduation-cap"></i>
                                <span>MASTER PROGRAM</span>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-clock"></i>
                                <span>12 Months</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="program-card">
                    <div className="program-visual">
                        <img src="https://investingnews.com/media-library/surgeons-stand-around-a-hospital-bed-with-patient-on-it-and-a-surgical-robot-above-it.jpg?id=53684268&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0" alt="Medical Robotics" />
                    </div>
                    <div className="program-content">
                        <h4>MASTER PROGRAM in Medical Robotics</h4>
                        <p>Transform Healthcare with Robotic Innovation through surgical robotics, rehabilitation systems, and medical automation. Master robotic surgery, prosthetics, and healthcare technology integration.</p>
                        <a href="#" className="learn-more">Learn More</a>
                        <div className="program-info">
                            <div className="info-item">
                                <i className="fas fa-graduation-cap"></i>
                                <span>MASTER PROGRAM</span>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-clock"></i>
                                <span>12 Months</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="program-card">
                    <div className="program-visual">
                        <img src="https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg" alt="Agri Robotics" />
                    </div>
                    <div className="program-content">
                        <h4>MASTER PROGRAM in Agri Robotics</h4>
                        <p>Revolutionize Agriculture with Advanced Robotics for automated farming, crop harvesting, and precision agriculture. Master autonomous vehicles, sensor technology, and smart farming systems.</p>
                        <a href="#" className="learn-more">Learn More</a>
                        <div className="program-info">
                            <div className="info-item">
                                <i className="fas fa-graduation-cap"></i>
                                <span>MASTER PROGRAM</span>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-clock"></i>
                                <span>12 Months</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// ============== UPCOMING COURSES COMPONENT ==============
const UpcomingCourses = () => (
    <section id="upcoming-courses" className="upcoming-courses">
        <div className="container">
            <div className="courses-header">
                <div className="expand-knowledge">EXPAND YOUR KNOWLEDGE</div>
                <h2>Upcoming Courses</h2>
                <p className="section-subtitle">Discover our latest course offerings designed to keep you at the forefront of technology</p>
            </div>
            <div className="courses-grid">
                <div className="course-card featured">
                    <div className="course-image">
                        <img src="https://agmay.in/images/manufacturing.webp" alt="Drone Manufacturing" />
                        <div className="course-badge">Featured</div>
                    </div>
                    <div className="course-content">
                        <h3>MASTER PROGRAM in Drone Manufacturing</h3>
                        <p>Comprehensive program covering drone design, manufacturing, and industrial applications with hands-on training.</p>
                        <div className="course-status">
                            <div className="status-item">
                                <i className="fas fa-calendar-alt"></i>
                                <span>Coming soon</span>
                            </div>
                            <div className="status-item">
                                <i className="fas fa-clock"></i>
                                <span>12 Months</span>
                            </div>
                        </div>
                        <button className="btn-enroll">Enroll Now</button>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-image">
                        <img src="https://investingnews.com/media-library/surgeons-stand-around-a-hospital-bed-with-patient-on-it-and-a-surgical-robot-above-it.jpg?id=53684268&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0" alt="Medical Robotics" />
                        <div className="course-badge">Popular</div>
                    </div>
                    <div className="course-content">
                        <h3>MASTER PROGRAM in Medical Robotics</h3>
                        <p>Advanced program focusing on robotic applications in healthcare, surgery, and medical diagnostics.</p>
                        <div className="course-status">
                            <div className="status-item">
                                <i className="fas fa-calendar-alt"></i>
                                <span>Coming soon</span>
                            </div>
                            <div className="status-item">
                                <i className="fas fa-clock"></i>
                                <span>12 Months</span>
                            </div>
                        </div>
                        <button className="btn-enroll">Enroll Now</button>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-image">
                        <img src="https://www.parvalux.com/app/uploads/fly-images/17652/Robots_Motors_in_Agriculture-750x415-f50_50.jpg" alt="Agriculture Robotics" />
                        <div className="course-badge">New</div>
                    </div>
                    <div className="course-content">
                        <h3>MASTER PROGRAM in Agriculture Robotics</h3>
                        <p>Specialized training in robotic systems for modern farming, automation, and precision agriculture techniques.</p>
                        <div className="course-status">
                            <div className="status-item">
                                <i className="fas fa-calendar-alt"></i>
                                <span>Coming soon</span>
                            </div>
                            <div className="status-item">
                                <i className="fas fa-clock"></i>
                                <span>12 Months</span>
                            </div>
                        </div>
                        <button className="btn-details-blue">Details</button>
                    </div>
                </div>
            </div>
            
            <div className="view-all-courses">
                <button className="btn-view-all">View All Upcoming Courses</button>
            </div>
        </div>
    </section>
);

// ============== RESEARCH PROJECTS COMPONENT ==============
const ResearchProjects = () => (
    <section id="research" className="research-projects">
        <div className="container">
            <h2>Our Ongoing Research Projects</h2>
            <p className="section-subtitle">Explore our cutting-edge research initiatives across various technology domains</p>
            <div className="research-grid">
                <div className="research-card">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="AI-Powered Predictive Maintenance" />
                    <div className="research-card-content">
                        <h3>AI-Powered Predictive Maintenance</h3>
                        <p>Developing AI models for predictive maintenance of industrial equipment to reduce downtime.</p>
                    </div>
                </div>
                 <div className="research-card">
                    <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Conversational AI Assistant" />
                    <div className="research-card-content">
                        <h3>Conversational AI Assistant</h3>
                        <p>Creating an AI assistant for mental health support and counseling services.</p>
                    </div>
                </div>
                 <div className="research-card">
                    <img src="https://media.istockphoto.com/id/1991279584/photo/hands-of-robot-and-human-touching-medical-icons-interface-virtual-screen-with-performance.jpg?s=612x612&w=0&k=20&c=sGo1P-wDxiY2JxYCIPRXCtPD88c6aerYwN1gKBN8epc=" alt="Automated Disease Detection" />
                    <div className="research-card-content">
                        <h3>Automated Disease Detection</h3>
                        <p>Using deep learning for automated detection of diseases in medical images.</p>
                    </div>
                </div>
                 <div className="research-card">
                    <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Point-of-Care Diagnostic Device" />
                    <div className="research-card-content">
                        <h3>Point-of-Care Diagnostic Device</h3>
                        <p>Developing portable diagnostic tools for rapid detection of infectious diseases.</p>
                    </div>
                </div>
                 <div className="research-card">
                    <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Smart Grid Systems" />
                    <div className="research-card-content">
                        <h3>Smart Grid Systems</h3>
                        <p>Creating intelligent grid systems for efficient energy distribution and management.</p>
                    </div>
                </div>
                 <div className="research-card">
                    <img src="https://media.istockphoto.com/id/1357830952/photo/ev-car-or-electric-car-at-charging-station-with-the-power-cable-supply-plugged-in-city.jpg?s=612x612&w=0&k=20&c=0XAGk3uca10QxsK3QuJH5xiF8qLIpXTdqjfX_hNB1l4=" alt="EV Charging Infrastructure" />
                    <div className="research-card-content">
                        <h3>EV Charging Infrastructure</h3>
                        <p>Designing urban electric vehicle charging networks for sustainable transportation.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// ============== EVENTS SECTION COMPONENT ==============
const EventsSection = () => {
    const [activeTab, setActiveTab] = useState('conferences');

    const renderContent = () => {
        switch (activeTab) {
            case 'conferences':
                return (
                    <div className="events-grid">
                        <div className="event-card">
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Conference Hall" />
                            <div className="event-card-content">
                                <h3>International Conference on AI & Robotics</h3>
                                <p>Annual gathering of AI and robotics experts from academia and industry to discuss latest advancements.</p>
                                <div className="event-card-info"><i className="fas fa-map-marker-alt"></i><span>Virtual & On-campus</span></div>
                            </div>
                        </div>
                        <div className="event-card">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="People collaborating" />
                            <div className="event-card-content">
                                <h3>Tech for Sustainable Development</h3>
                                <p>Exploring technological solutions for achieving sustainable development goals.</p>
                                <div className="event-card-info"><i className="fas fa-map-marker-alt"></i><span>Main Campus</span></div>
                            </div>
                        </div>
                        <div className="event-card">
                            <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Agri-Tech" />
                            <div className="event-card-content">
                                <h3>Future of Agri-Tech</h3>
                                <p>Conference focusing on emerging technologies in agriculture and food production.</p>
                                <div className="event-card-info"><i className="fas fa-map-marker-alt"></i><span>Agricultural Research Center</span></div>
                            </div>
                        </div>
                    </div>
                );
            case 'webinars':
                return (
                    <div className="events-grid">
                        <div className="event-card">
                            <img src="https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Drone in flight" />
                            <div className="event-card-content"><h3>Introduction to Drone Technology</h3><p>Free webinar covering basics of drone technology and its industrial applications.</p></div>
                        </div>
                        <div className="event-card">
                            <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="AI and ML concept" />
                            <div className="event-card-content"><h3>Career in AI & ML</h3><p>Webinar discussing career opportunities and skill requirements in AI/ML fields.</p></div>
                        </div>
                        <div className="event-card">
                            <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Precision agriculture" />
                            <div className="event-card-content"><h3>Precision Agriculture Techniques</h3><p>Learn about modern precision farming methods using IoT and data analytics.</p></div>
                        </div>
                    </div>
                );
            case 'courses':
                return (
                    <div className="events-grid">
                        <div className="event-card">
                            <img src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Drone piloting" />
                            <div className="event-card-content">
                                <h3>Certificate in Drone Piloting</h3>
                                <p>3-month program covering drone operation, regulations, and commercial applications.</p>
                                <div className="event-card-info"><i className="fas fa-check-circle"></i><span>DGCA Approved</span></div>
                            </div>
                        </div>
                        <div className="event-card">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Business analytics dashboard" />
                            <div className="event-card-content">
                                <h3>AI for Business Professionals</h3>
                                <p>6-week certificate course on AI applications for non-technical business leaders.</p>
                                <div className="event-card-info"><i className="fas fa-check-circle"></i><span>Industry Recognized</span></div>
                            </div>
                        </div>
                        <div className="event-card">
                            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="IoT circuit board" />
                            <div className="event-card-content">
                                <h3>IoT Fundamentals</h3>
                                <p>8-week hands-on course on Internet of Things concepts and implementation.</p>
                                <div className="event-card-info"><i className="fas fa-check-circle"></i><span>With Lab Access</span></div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="events" className="events-section">
            <div className="container">
                <h2>Conferences, Webinars & Certificate Courses</h2>
                <p className="section-subtitle">Participate in our knowledge-sharing events and short-term certification programs</p>
                <div className="events-tabs">
                    <button onClick={() => setActiveTab('conferences')} className={`tab-btn ${activeTab === 'conferences' ? 'active' : ''}`}>Conferences</button>
                    <button onClick={() => setActiveTab('webinars')} className={`tab-btn ${activeTab === 'webinars' ? 'active' : ''}`}>Webinars</button>
                    <button onClick={() => setActiveTab('courses')} className={`tab-btn ${activeTab === 'courses' ? 'active' : ''}`}>Certificate Courses</button>
                </div>
                {renderContent()}
            </div>
        </section>
    );
};


// ============== FOOTER COMPONENT ==============
const Footer = () => {
    const [newsletterStatus, setNewsletterStatus] = useState('');

    const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNewsletterStatus('Thank you for subscribing!');
        setTimeout(() => setNewsletterStatus(''), 5000); // Clear message after 5 seconds
        (e.target as HTMLFormElement).reset();
    };

    const currentYear = new Date().getFullYear();

    return (
      <footer id="contact" className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>About Institute of Global Technology</h3>
              <p>Institute of Global Technology is committed to academic excellence, innovation, and the holistic development of students to become leaders in technology fields.</p>
              <p><strong>Accredited by AIAB Europe</strong></p>
              <div className="social-icons">
                <a href="#" aria-label="Facebook" title="Follow us on Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Twitter" title="Follow us on Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="LinkedIn" title="Connect on LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" aria-label="Instagram" title="Follow us on Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="YouTube" title="Watch our videos">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/home" className="footer-nav-link">Home</Link></li>
                <li><Link to="/programs" className="footer-nav-link">Academic Programs</Link></li>
                <li><Link to="/departments" className="footer-nav-link">Research Departments</Link></li>
                <li><Link to="/faculty" className="footer-nav-link">Faculty</Link></li>
                <li><Link to="/admissions" className="footer-nav-link">Admissions</Link></li>
                <li><Link to="/contact" className="footer-nav-link">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Academic Programs</h3>
              <ul>
                <li><a href="#" className="footer-nav-link">Robotics & AI</a></li>
                <li><a href="#" className="footer-nav-link">Precision Agriculture</a></li>
                <li><a href="#" className="footer-nav-link">Drone Technology</a></li>
                <li><a href="#" className="footer-nav-link">Healthcare & Life Sciences</a></li>
                <li><a href="#" className="footer-nav-link">Emerging Technologies</a></li>
                <li><a href="#" className="footer-nav-link">Research Opportunities</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter to receive updates on events, admissions, and institute news.</p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  required 
                  aria-label="Email address for newsletter"
                />
                <button type="submit" aria-label="Subscribe to newsletter">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
              {newsletterStatus && <p className="newsletter-message">{newsletterStatus}</p>}
              <p className="newsletter-note">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <span>&copy; {currentYear} Institute of Global Technology. All Rights Reserved.</span>
              <div className="footer-bottom-links">
                <a href="#" aria-label="Terms of Use">Terms of Use</a>
                <a href="#" aria-label="Privacy Policy">Privacy Policy</a>
                <a href="#" aria-label="Accessibility">Accessibility</a>
                <a href="#" aria-label="Contact Support">Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

// ============== HOME PAGE COMPONENT ==============
const HomePage = () => (
    <>
        <Hero />
        <About />
        <WhyChooseUs />
        <AcademicPrograms />
        <UpcomingCourses />
        <ResearchProjects />
        <EventsSection />
    </>
);

// ============== DEPARTMENTS PAGE DATA & COMPONENT ==============
const departmentsData = [
    {
        name: 'AI & Machine Learning',
        description: 'Developing AI and ML algorithms, models, and applications for various industries.',
        researchAreas: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Robotics'],
        image: 'https://sageuniversity.edu.in/assets/images/blog/role-of-artificial-intelligence-in-agriculture.jpg'
    },
    {
        name: 'Cybersecurity',
        description: 'Investigating cybersecurity threats, vulnerabilities, and countermeasures.',
        researchAreas: ['Threat Intelligence', 'Incident Response', 'Cryptography', 'Network Security'],
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
        name: 'Data Science & Analytics',
        description: 'Developing data-driven solutions for insights and decision-making.',
        researchAreas: ['Big Data Analytics', 'Data Visualization', 'Predictive Modelling', 'Statistical Analysis'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'IoT & Edge Computing',
        description: 'Designing and implementing IoT systems and edge computing architectures.',
        researchAreas: ['IoT Security', 'Edge AI', 'Real-time Analytics', 'Industrial Automation'],
        image: 'https://tamediacdn.techaheadcorp.com/wp-content/uploads/2023/09/16045709/A-Step-By-Step-Tutorial-For-Building-Your-First-IoT-Embedded-System.webp'
    },
    {
        name: 'Sustainable Energy',
        description: 'Investigating sustainable energy solutions and climate change mitigation.',
        researchAreas: ['Renewable Energy', 'Energy Storage', 'Green Buildings', 'Sustainable Infrastructure'],
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Biotechnology & Healthcare',
        description: 'Developing innovative solutions for healthcare and medicine.',
        researchAreas: ['Personalized Medicine', 'Regenerative Medicine', 'Gene Editing', 'Medical Imaging'],
        image: 'https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg'
    },
    {
        name: 'Robotics & Autonomous Systems',
        description: 'Designing advanced robotic systems and autonomous vehicles.',
        researchAreas: ['Robotics', 'Autonomous Systems', 'Human-Robot Interaction', 'Swarm Robotics'],
        image: 'https://media.licdn.com/dms/image/v2/D5612AQFLdebIV4BTYQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721157098257?e=1761782400&v=beta&t=yLMm79DcuvTBA2jgbmubv_CMdyNlY8RQ8Kli_bTzNMo'
    },
    {
        name: 'Advanced Materials',
        description: 'Investigating novel materials and manufacturing processes.',
        researchAreas: ['Nanomaterials', 'Biomaterials', '3D Printing', 'Advanced Manufacturing'],
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
        name: 'Human-Computer Interaction',
        description: 'Developing user-centered interfaces and experiences.',
        researchAreas: ['User Experience Design', 'Human-Computer Interaction', 'Accessibility', 'Usability'],
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Zoology & Animal Biotechnology',
        description: 'Exploring the genetic and cellular aspects of animals for sustainable development.',
        researchAreas: ['Animal Genetics', 'Cellular Biotechnology', 'Wildlife Conservation', 'Veterinary Applications'],
        image: 'https://i.ibb.co/WNZ4GPQ1/download-11.jpg'
    },
    {
        name: 'Botany & Plant Biotechnology',
        description: 'Advancing plant science through genetic engineering and sustainable agriculture.',
        researchAreas: ['Plant Tissue Culture', 'Genetically Modified Crops', 'Medicinal Plants', 'Agro-biotechnology'],
        image: 'https://media.sciencephoto.com/f0/11/88/40/f0118840-800px-wm.jpg'
    },
    {
        name: 'Quantum Computing',
        description: 'Exploring quantum computing and emerging technologies.',
        researchAreas: ['Quantum Algorithms', 'Quantum Applications', 'Blockchain', 'Distributed Ledger Tech'],
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
];

const DepartmentsPage = () => (
    <section className="departments-page">
        <div className="page-banner departments-banner">
            <div className="container">
                <h2>Our Research Departments</h2>
                <p>Explore our specialized research departments that are pushing the boundaries of knowledge and innovation</p>
            </div>
        </div>
        <div className="container">
            <div className="department-grid">
                {departmentsData.map((dept, index) => (
                    <div key={index} className="department-card">
                        <img src={dept.image} alt={dept.name} />
                        <div className="department-card-content">
                            <h3>{dept.name}</h3>
                            <p>{dept.description}</p>
                            <strong>Research Areas:</strong>
                            <ul>
                                {dept.researchAreas.map((area, i) => <li key={i}>{area}</li>)}
                            </ul>
                            <a href="#">Explore Department</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ============== FACULTY PAGE DATA & COMPONENT ==============
const facultyData = [
    {
        name: 'Dr Ipseeta Nanda',
        title: 'Hon.Director Dean IGT',
        bio: 'With 19 years of experience in teaching, research, and administration (Dean), Dr. Nanda has guided PhD students and participated in prestigious conferences as plenary speaker and guest of honor. She was honored with the IIWA-2020 award for Best Women Performer of the Year and accolades from South-Central Railway Women Union. Former Founder Dean of Faculty of IT at GNS University and Director of Curriculum Design at Innogurus, she specializes in IoT and has contributed as reviewer for Wiley IoT books.',
        image: 'https://i.ibb.co/tp3fgxV9/Screenshot-2025-05-16-012710.png',
        social: { email: '#', linkedin: '#', scholar: '#' }
    },
    {
        name: 'Dr Rahul Vadiseety',
        title: 'Director AI',
        bio: 'Rahul Vadisetty is a passionate and dedicated AI researcher and technologist with over a decade of experience in AI, machine learning, cybersecurity, and cloud computing. His contributions extend to smart governance, IoT-based intrusion detection, and AI-driven healthcare diagnostics. His pioneering work in AI-Based Smart Governance has provided governments with AI-driven frameworks to enhance decision-making. His expertise includes developing machine learning algorithms for cybersecurity, deep learning, cloud computing, and AI-driven governance.',
        image: 'https://i.ibb.co/M52WXqsF/Screenshot-2025-05-17-205413.png',
        social: { email: '#', linkedin: '#', scholar: '#' }
    },
    {
        name: 'Dr. Rath Satyasambit',
        title: 'Director Robotics',
        bio: "Works with neural data from rat's brain using computational methods and dimensionality reduction techniques. Developed novel BRNN decoders for neural calcium signals during emotional memory tasks. Holds a PhD in Artificial Intelligence from Tokyo Institute of Technology and Master's in Cognitive Neuroscience from National Central University, Taiwan.",
        image: 'https://i.ibb.co/fV9xBQV0/Screenshot-2025-05-15-214959.png',
        social: { email: '#', linkedin: '#', scholar: '#' }
    },
    {
        name: 'Dr Harshichander',
        title: 'Director Biology',
        bio: 'Dr. Harishchander Anandaram is a Assistant Professor (Senior Grade), School of Artificial Intelligence, Coimbatore. He completed his PhD in Bioengineering (2020), M.Tech. in Bioinformatics (2011), and B.Tech. in Bioinformatics (2009) from the Sathyabama Institute of Science and Technology, Chennai. His research includes analyzing resistance in HIV protease inhibitors through molecular mechanics and machine learning, and exploring pharmacogenomics and miRNA-regulated networks in psoriasis in collaboration with prestigious institutions like IIT Madras, Georgetown University, JIPMER, CIBA, and ILS.',
        image: 'https://i.ibb.co/7qz46NM/Screenshot-2025-05-15-185114.png',
        social: { email: '#', linkedin: '#', scholar: '#' }
    }
];

const FacultyPage = () => (
    <section className="faculty-page">
        <div className="faculty-header">
            <h2>Our Distinguished Faculty</h2>
            <p>Meet our accomplished faculty members who are experts in their fields and dedicated to student success.</p>
        </div>
        <div className="container">
            <div className="faculty-grid">
                {facultyData.map((member, index) => (
                    <div key={index} className="faculty-box">
                        <div className="faculty-card">
                            <img src={member.image} alt={`Portrait of ${member.name}`} className="faculty-image" />
                            <div className="faculty-content">
                                <h3>{member.name}</h3>
                                <span className="title">{member.title}</span>
                                <p>{member.bio}</p>
                                <div className="faculty-social">
                                    <a href={member.social.email} aria-label="Email"><i className="fas fa-envelope"></i></a>
                                    <a href={member.social.linkedin} aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                    <a href={member.social.scholar} aria-label="Google Scholar"><i className="ai ai-google-scholar"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


// ============== MAIN LAYOUT COMPONENT ==============
const Layout = () => {
    const location = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <GlobalStyles />
            <FontAwesomeLoader />
            <Header activePage={location.pathname} />
            <main>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/programs" element={<ProgramsPage />} />
                    <Route path="/departments" element={<DepartmentsPage />} />
                    <Route path="/faculty" element={<FacultyPage />} />
                    <Route path="/admissions" element={<AdmissionsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/tour" element={<TourPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}