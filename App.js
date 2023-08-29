function App() {
    return (
        <div className="text-center">
            <input type="text" className="border p-2 mb-4" />
            <div>
                <label className="mx-2">
                    <input type="radio" name="option" value="1" />
                    Opción 1
                </label>
                <label className="mx-2">
                    <input type="radio" name="option" value="2" />
                    Opción 2
                </label>
                <label className="mx-2">
                    <input type="radio" name="option" value="3" />
                    Opción 3
                </label>
            </div>
        </div>
    );
}
