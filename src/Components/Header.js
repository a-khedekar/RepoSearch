import '../App.css';


function Header(props) {
    const onkeypress = (e) => {
        if (e.key === 'Enter') {
            props.onFetch();
        }
    }

    return (
        <div className="fetchContainer Centralization" >
            <div>
                <input className="fetchInput" type="text" placeholder="Please enter the username to fetch repos" onKeyPress={onkeypress} onChange={props.onUname} />
                <button className="fetchButton" onClick={props.onFetch}>Fetch</button>
            </div>
        </div >
    )
}

export default Header;
