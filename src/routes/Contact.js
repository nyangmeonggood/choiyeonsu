import ParticleCanvas from "../Components/ParticleCanvas.js";
import ShadowTitle from "../hook/ShadowTitle";
import "../scss/contact.scss";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import { ColorArray } from "../hook/Color.js";

export default function Contact({ stageWidth, stageHeight, change, setChange }) {
    const greetRef = useRef()

    let serviceID = "choiyeonsuPortfolio2021",
        templateID = "template_d4xdkg9";

    const { register, handleSubmit, errors } = useForm();

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email sent')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }


    const onSubmit = (data, r) => {
        greetRef.current.innerHTML = "이메일 전송이 완료되었습니다!"
        sendFeedback(serviceID, templateID, { from_name: data.name, message_html: data.comment, reply_to: data.email })
        r.target.reset();
    }

    useEffect(() => {
        const focusLine = Object.values(document.querySelectorAll(".focusLine"))
        const submitBtn = document.querySelector(".submitBtn")

        focusLine.forEach((item) => {
            item.addEventListener("focusin", () => {
                let random = Math.floor(Math.random() * ColorArray.length)
                let color = ColorArray[random]
                item.style.borderBottom = `2px solid ${color}`
            })

            item.addEventListener('focusout', () => {
                item.style.borderBottom = `1px solid #111`
            });
        })

        submitBtn.addEventListener("mouseenter", () => {
            let random = Math.floor(Math.random() * ColorArray.length)
            let color = ColorArray[random]
            submitBtn.style.backgroundColor = `${color}`
            submitBtn.style.color = `#f0f0f0`
        })

        submitBtn.addEventListener('mouseout', () => {
            submitBtn.style.backgroundColor = `#f0f0f0`
            submitBtn.style.color = `#111`
        });
    })


    return (
        <>
            <section id="Contact" >
                <div>
                    <ShadowTitle text={"Contact"} />

                    <h3 ref={greetRef}>Thx for watching my Portfolio<br />If you wanna contact with me , send me a message!</h3>
                    <div className="formBox">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label>이름</label>
                                <input
                                    className="focusLine"
                                    autoComplete="off"
                                    placeholder="이름을 입력해주세요"
                                    name="name"
                                    ref={
                                        register({
                                            required: true,
                                            maxLength: {
                                                value: 20,
                                                message: "Please enter a name with fewer than 20 characters"
                                            }
                                        })
                                    }
                                />
                            </div>

                            {errors.name && <span className="errorMessage">이름을 입력해주세요</span>}

                            <div>
                                <label>이메일</label>
                                <input
                                    className="focusLine"
                                    autoComplete="off"
                                    placeholder="이메일을 입력해주세요"
                                    name="email"
                                    ref={
                                        register({
                                            required: true,
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid email address"
                                            }
                                        })
                                    }
                                />
                            </div>

                            {errors.email && <span className="errorMessage">이메일을 입력해주세요</span>}

                            <div>
                                <label>내용</label>
                                <textarea
                                    className="focusLine"
                                    autoComplete="off"
                                    placeholder="내용을 입력해주세요"
                                    name="comment"
                                    ref={
                                        register({
                                            required: true
                                        })
                                    }
                                />
                            </div>

                            {errors.comment && <span className="errorMessage">내용을 입력해주세요</span>}

                            <div>
                                <input className="submitBtn" type="submit" value="보내기" />
                            </div>
                        </form>
                    </div>

                </div>
            </section>
            <ParticleCanvas stageWidth={stageWidth} stageHeight={stageHeight} />
        </>
    );
}
