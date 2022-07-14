import React from "react";
import s from "./dialogs.module.css"

function Dialogs(props: any) {
    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <div className={s.dialog + " " + s.active}>Artem</div>
                    <div className={s.dialog}>Mikhail</div>
                    <div className={s.dialog}>Alex</div>
                </div>

                <div className={s.messages}>
                    <div className={s.message}>Hello!</div>
                    <div className={s.message}>Hi!</div>
                    <div className={s.message}>How are you?</div>
                </div>
            </div>

        </>
    )
}

export default Dialogs