import { Link } from "react-router-dom";
import styled from "styled-components";
import breakpoints from "~breakpoints";
import Times from "~svg/Times";

const commomStyled = {
    MainWrapper: styled.div`
        box-sizing: border-box;
        flex:1;
        /* background:red; */
        margin:1.6rem;
        background:#fff;
        border-radius: 8px;
        padding-top:1.6rem;
        padding-bottom: 1.6rem;
    `,
    MainHead: styled.div`
        padding: 0 2.4rem;
        margin-bottom: 1.6rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        &>span{
            font-weight: 700;
            font-size: 2.4rem;
            line-height: 3.6rem;
            color: #2A333D;
        }
        & button{
            height:40px;
            padding: 0 16px;
            font-weight: 500;
            font-size: 16px;
        }
    `,
    MainContent: styled.div`
        font-weight: 400;
        font-size: 16px;
        padding:0 24px;
        color: #2A333D;
    `,
    ModalHead: styled.div`
        height:65px;
        padding: 0 2.4rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid #e8e8e8;
        margin-bottom:16px;
        &>span{
            font-weight: 700;
            font-size: 20px;
            color: #2A333D;
        }
    `,
    ModalCloseIcon: styled(Times)`
        width:16px;
        height:16px;
        fill: #455666;
        cursor: pointer;
    `,
    ModalBody: styled.div`
        padding:0 24px;
        font-weight: 400;
        font-size: 16px;
        color: #2A333D;
        flex:1;
    `,
    ModalFoot: styled.div`
        height: 73px;
        padding: 0 24px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
        border-top:1px solid #e8e8e8;
        margin-top:16px;
        &>button{
            height:40px;
            font-weight: 500;
            font-size: 16px;    

        }
    `,
}

export default commomStyled;