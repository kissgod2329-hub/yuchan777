// Firebase Configuration (Replace with your own config)
const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "yuchan20260228-36743108-49b39.firebaseapp.com",
    projectId: "yuchan20260228-36743108-49b39",
    storageBucket: "yuchan20260228-36743108-49b39.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
if (firebaseConfig.apiKey !== "YOUR_FIREBASE_API_KEY") {
    firebase.initializeApp(firebaseConfig);
}

// Kakao SDK Initialization
const KAKAO_JS_KEY = 'YOUR_KAKAO_JS_KEY';
if (typeof Kakao !== 'undefined' && KAKAO_JS_KEY !== 'YOUR_KAKAO_JS_KEY') {
    if (!Kakao.isInitialized()) {
        Kakao.init(KAKAO_JS_KEY);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Lotto Logic
    const drawButton = document.getElementById('drawButton');
    const lottoRows = document.querySelectorAll('.lotto-row');

    function generateLottoNumbers() {
        const numbers = [];
        while (numbers.length < 6) {
            const num = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        return numbers.sort((a, b) => a - b).map(n => n.toString().padStart(2, '0'));
    }

    function draw() {
        lottoRows.forEach((row, index) => {
            setTimeout(() => {
                const numbers = generateLottoNumbers();
                row.textContent = numbers.join(' ');
                row.classList.add('active');
                
                setTimeout(() => {
                    row.classList.remove('active');
                }, 1000);
            }, index * 100);
        });
    }

    drawButton.addEventListener('click', draw);

    // Login Logic
    const loginModal = document.getElementById('loginModal');
    const loginBtn = document.getElementById('loginBtn');
    const closeBtn = document.querySelector('.close');
    const googleLoginBtn = document.getElementById('googleLogin');
    const kakaoLoginBtn = document.getElementById('kakaoLogin');
    const logoutBtn = document.getElementById('logoutBtn');
    const userInfo = document.getElementById('userInfo');
    const userName = document.getElementById('userName');
    const userAvatar = document.getElementById('userAvatar');

    // Modal Control
    loginBtn.onclick = () => loginModal.style.display = "block";
    closeBtn.onclick = () => loginModal.style.display = "none";
    window.onclick = (event) => {
        if (event.target == loginModal) loginModal.style.display = "none";
    }

    // Auth State Observer
    if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in
                loginBtn.style.display = "none";
                userInfo.style.display = "flex";
                userName.textContent = user.displayName;
                userAvatar.src = user.photoURL || 'https://via.placeholder.com/32';
                loginModal.style.display = "none";
            } else {
                // User is signed out
                loginBtn.style.display = "block";
                userInfo.style.display = "none";
            }
        });
    }

    // Google Login
    googleLoginBtn.onclick = () => {
        if (firebaseConfig.apiKey === "YOUR_FIREBASE_API_KEY") {
            alert('Firebase API Key를 설정해주세요.');
            return;
        }
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).catch((error) => {
            console.error("Google Login Error:", error);
            alert("로그인 중 오류가 발생했습니다.");
        });
    };

    // Kakao Login
    kakaoLoginBtn.onclick = () => {
        if (typeof Kakao === 'undefined' || !Kakao.isInitialized()) {
            alert('Kakao JavaScript Key를 설정해주세요.');
            return;
        }
        Kakao.Auth.login({
            success: function(authObj) {
                Kakao.API.request({
                    url: '/v2/user/me',
                    success: function(res) {
                        const user = res.kakao_account.profile;
                        loginBtn.style.display = "none";
                        userInfo.style.display = "flex";
                        userName.textContent = user.nickname;
                        userAvatar.src = user.thumbnail_image_url;
                        loginModal.style.display = "none";
                        alert(user.nickname + '님 환영합니다!');
                    },
                    fail: function(error) {
                        console.error(error);
                    }
                });
            },
            fail: function(err) {
                console.error(err);
            },
        });
    };

    // Logout
    logoutBtn.onclick = () => {
        if (typeof firebase !== 'undefined' && firebase.apps.length > 0 && firebase.auth().currentUser) {
            firebase.auth().signOut();
        } else if (typeof Kakao !== 'undefined' && Kakao.Auth.getAccessToken()) {
            Kakao.Auth.logout(() => {
                loginBtn.style.display = "block";
                userInfo.style.display = "none";
                alert('로그아웃 되었습니다.');
            });
        } else {
            loginBtn.style.display = "block";
            userInfo.style.display = "none";
        }
    };
});
