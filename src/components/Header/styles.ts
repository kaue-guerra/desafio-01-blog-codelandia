import styled from 'styled-components'

export const Container = styled.header`
    background: linear-gradient(88.27deg, #574AE8 0%, #3EA1DB 100%);


`

export const Content = styled.div`
        max-width: 900px;
        margin: 0 auto;
        padding: 1rem 1rem 3rem;
        color: var(--white);
        font-style: normal;
        
        #title-header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top:42px;
        }

        i{ 
            position: absolute;
            margin-top: 85px;
            margin-left: 24px;
            font-size: 1.5rem;
        }

        input{ 
            width: 100%;
            margin-top: 4rem;
            height: 4rem;
            padding-left: 64px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 5px;
            border-style: none;
            font-family: "Inter", sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            color: var(--white);
            outline: none;

            ::-webkit-input-placeholder {
                color: var(--white);
                opacity: 0.5;
                font-size: 18px;
            }

            :-moz-placeholder { /* Firefox 18- */
                color: var(--white);
                opacity: 0.5;
            }

            ::-moz-placeholder {  /* Firefox 19+ */
                color: var(--white);
                opacity: 0.5;
            }

            :-ms-input-placeholder {  
                color: var(--white); 
                opacity: 0.5;
            }
        }
`