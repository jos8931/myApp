import React, {useState} from 'react';

export default function Join() {
    const [isTermAgreed, setIsTermsAgreed] = useState(false);

    const [isMarketingAgreed, setIsMarketingAgreed] = useState(false);

    const handleTermsChange = (event) => {
        setIsTermsAgreed(event.target.checked);
    };

    const handleMarketingChange = (event) => {
        setIsMarketingAgreed(event.target.checked);
    };

    const handleSignup = () => {
        alert('가입이 완료되었습니다.');
    };

    return(
        <div>
            <h2>약관동의</h2>
            <label>
                <input
                type='checkbox'
                checked={isTermAgreed}
                onChange={handleTermsChange}/>
                [필수] 약관에 동의합니다.
            </label>
            <br/>
            <label>
                <input
                type='checkbox'
                checked={isMarketingAgreed}
                onChange={handleMarketingChange}/>
                [선택] 광고 마케팅에 동의합니다.
            </label>
            <br/>
            <button
            onClick={handleSignup}
            disabled={!isTermAgreed}>
                가입
            </button>
        </div>
    );

}