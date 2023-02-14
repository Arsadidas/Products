import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch";
import {fetchProducts} from "../../redux/slices/productsSlice";
import Modal from "../Modal/Modal";
import CurrentProduct from "../CurrentProduct/CurrentProduct";
import {IProduct} from "../../redux/types/types";
import Input from "../Input/Input";
import Products from "../Products/Products";
import styles from './App.module.css'

function App() {

    const dispatch = useAppDispatch()

    const {products} = useTypedSelector(state => state.products)

    const [active, setActive] = useState<boolean>(false)

    const [selectedItem, setSelectedItem] = useState<IProduct | null>(null)

    const [value, setValue] = useState<string>('')


    let filteredArray = products.filter((item) => {
        return item.name!.toLowerCase().includes(value.toLowerCase())
    })

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className={styles.app}>
            <Input value={value} setValue={setValue}/>
            <Products filteredArray={filteredArray} setActive={setActive} setSelectedItem={setSelectedItem}/>
            <Modal active={active} setActive={setActive}>
                <CurrentProduct setActive={setActive} selectedItem={selectedItem}/>
            </Modal>
        </div>
    );
}

export default App;
