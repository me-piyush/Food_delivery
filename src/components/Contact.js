const Contact =()=>{
    return(
        <div >
            <h1 className="font-bold text-2xl">Contact Us</h1>
            <form action="">
                <input type="text" className="border border-black p-2 m-2" placeholder="Name" />
                <input type="text" className="border border-black p-2 m-2" placeholder="Message" />
                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
            </form>
        </div>

    );
};
export default Contact;