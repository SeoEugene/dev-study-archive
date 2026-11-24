// 실제 값은 환경 변수로 넣습니다. (2026 정리: 공개 저장소에서 키 제거)
module.exports = {
    mongoURI: process.env.MONGO_URI,
    access_key: process.env.NCP_ACCESS_KEY,
    secret_key: process.env.NCP_SECRET_KEY,
}
