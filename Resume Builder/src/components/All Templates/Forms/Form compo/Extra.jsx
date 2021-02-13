import React from 'react';

const Extra = ({setLang, setlangprogress}) => {

    const input = (e)=>{
        let {name, value} = e.target;
        setLang(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    const input2 = (e)=>{
        let {name, value} = e.target;
        setlangprogress(prev=>{
            console.log(prev)
            return{
                ...prev,
                [name]:value
            }
        })
    }

    let style={
        fontFamily: "Poppins",fontSize: "1.8rem", textAlign:"left", width:"100%", marginTop: "2rem"
    }
    
    return (
    <>
        <h1 style={style}>Languages</h1>
        <div className="lang_container_form">
            <section>
                <label htmlFor="lang1">
                    <input type="text" id="lang1" name="lang1" placeholder="Enter Primary Language" onChange={input}/>
                </label>
                <label className="level">How Well You know it in(%) out 100
                    <input type="number" name="lang_pro1" placeholder="Language Level" onChange={input2}/>
                </label>
            </section>
            <section>
                <label htmlFor="lang2">
                    <input type="text" id="lang2" name="lang2" placeholder="Enter Secondary Language" onChange={input}/>
                </label>
                <label className="level">How Well You know it in(%) out of 100
                    <input type="text" name="lang_pro2" placeholder="Language Level" onChange={input2}/>
                </label>
            </section>
            <section>
                <label htmlFor="lang3">
                    <input type="text" id="lang3" name="lang3" placeholder="Enter Third Language" onChange={input}/>
                </label>
                <label className="level">How Well You know it in(%) out of 100
                    <input type="text" name="lang_pro3" placeholder="Language Level" onChange={input2}/>
                </label>
            </section>
        </div>
    </>
    )
}

export default Extra;
