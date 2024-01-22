function AddTopic() {
    return (
        <>
           <form className="flex flex-col gap-3" action="">
            <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Title" />
            <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Discription" />
            
            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                Add topic
            </button>
           </form>

        </>
    );
}

export default AddTopic;