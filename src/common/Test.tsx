import React from 'react'
import SuperButton from "../n1-main/m1-ui/common/superButton/SuperButton";
import SuperCheckbox from "../n1-main/m1-ui/common/superCheckbox/SuperCheckbox";
import SuperDoubleRange from "../n1-main/m1-ui/common/SuperDoubleRange/SuperDoubleRange";
import SuperEditableSpan from "../n1-main/m1-ui/common/superEditableSpan/SuperEditableSpan";
import SuperInputText from "../n1-main/m1-ui/common/superInput/SuperInputText";
import SuperRange from "../n1-main/m1-ui/common/SuperRange/SuperRange";
import SuperSelect from "../n1-main/m1-ui/common/SuperSelect/SuperSelect";
import SuperRadio from "../n1-main/m1-ui/common/SuperRadio/SuperRadio";
import HW4 from "../n1-main/m1-ui/common/superInput/HW4";


const Test = () => {
    return <div>
        <SuperButton/>
        <SuperCheckbox/>

        <SuperDoubleRange/>
        <SuperEditableSpan/>

        <HW4/>

        <div><SuperRange/></div>
        <div><SuperRadio/></div>
        <div><SuperSelect/></div>

    </div>
}

export default Test