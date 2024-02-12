

const CartButton = ({buttonText}) => {
    return (
        <div>
            <div className="card-actions justify-center">
                <button className="text-[#BB8506] border-b-4 border-[#BB8506] rounded-lg px-7 py-2 hover:text-white hover:bg-slate-700 hover:border-slate-700 font-bold uppercase">{buttonText}</button>
            </div>
        </div>
    );
};

export default CartButton;