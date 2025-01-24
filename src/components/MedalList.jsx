// src/components/MedalList.jsx
import { useState } from "react";

const MEDAL_RECORDS = []; // 초기값


const MedalList = () => {
    // 상태 관리
    const [records, setRecords] = useState(MEDAL_RECORDS); // 메달 기록 리스트
    const [contryName, setContryName] = useState(""); // 국가명
    const [gold, setGold] = useState(""); // 금메달 수
    const [silver, setSilver] = useState(""); // 은메달 수
    const [bronze, setBronze] = useState(""); // 동메달 수


    // 인풋 값이 비어있거나 숫자가 아닌 경우 제출하지 않음
    const handleSubmit = (e) => {
        e.preventDefault();

        // 공백 검증
        if (!contryName.trim()) {
            alert("모든 값을 입력해 주세요")
            return;
        }

        // 모든 메달 값이 비어있을 경우 0으로 설정
        const goldCount = gold === "" ? 0 : parseInt(gold, 10);
        const silverCount = silver === "" ? 0 : parseInt(silver, 10);
        const bronzeCount = bronze === "" ? 0 : parseInt(bronze, 10);

        // 모든 검증 통과 시
        alert("추가되었습니다.")

        // 입력값 추가
        setRecords([
            {
                id: crypto.randomUUID(),
                국가명: contryName,
                금메달: goldCount,
                은메달: silverCount,
                동메달: bronzeCount,
            },
            ...records,
        ]);

        // 입력 필드 초기화 (창식 튜터님: 아름다운 사람은 머문 자리도 아름답다...)
        setContryName("");
        setGold("");
        setSilver("");
        setBronze("");
    };


    // 인풋 변경 핸들링
    const handleChange = (setter) => (e) => setter(e.target.value);

    return (
        <div className="inputsContainer">
            <form onSubmit={handleSubmit}>
                {/* 국가명 입력 */}
                <div className="input-set">
                    <label htmlFor="contryName">국가명</label>
                    <input
                        className="inputBox"
                        id="contryName"
                        type="text"
                        value={contryName}
                        onChange={handleChange(setContryName)}
                        placeholder="국가 입력"
                    />
                </div>

                {/* 금메달 입력 */}
                <div className="input-set">
                    <label htmlFor="gold">금메달</label>
                    <input
                        className="inputBox"
                        id="gold"
                        type="number"
                        value={gold}
                        onChange={handleChange(setGold)}
                        placeholder="0"
                        min={0}
                    />
                </div>

                {/* 은메달 입력 */}
                <div className="input-set">
                    <label htmlFor="silver">은메달</label>
                    <input
                        className="inputBox"
                        id="silver"
                        type="number"
                        value={silver}
                        onChange={handleChange(setSilver)}
                        placeholder="0"
                        min={0}
                    />
                </div>

                {/* 동메달 입력 */}
                <div className="input-set">
                    <label htmlFor="bronze">동메달</label>
                    <input
                        className="inputBox"
                        id="bronze"
                        type="number"
                        value={bronze}
                        onChange={handleChange(setBronze)}
                        placeholder="0"
                        min={0}
                    />
                </div>

                {/* 버튼 */}
                <div className="button-row">
                    <button type="submit">추가하기</button>
                </div>
                <div><button>업데이트</button></div>

            </form>

            {/* 테이블 출력 */}
            <table>
                <thead>
                    <tr>
                        <th>국가명</th>
                        <th>금메달</th>
                        <th>은메달</th>
                        <th>동메달</th>
                        <th>액션</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map(({ id, 국가명, 금메달, 은메달, 동메달 }) => (
                        <tr key={id}>
                            <td>{국가명}</td>
                            <td>{금메달}</td>
                            <td>{은메달}</td>
                            <td>{동메달}</td>
                            <td><button>삭제</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MedalList;
