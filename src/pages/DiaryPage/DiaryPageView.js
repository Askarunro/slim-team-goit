import Container from '../../components/Container';
import DiaryDateСalendar from '../../components/DiaryDateСalendar/DiaryDateСalendar';
import LeftSideBar from '../../components/LeftSideBar';
import RightSideBar from '../../components/RightSideBar';
import { useState, useEffect } from 'react';
import DiaryProduct from '../../components/DiaryProduct';
import DiaryProductList from '../../components/DiaryPtoductList';
import { getDiaryByDate } from '..//../js/backendAPI';

export default function DiaryPageView() {
  const [date, setDate] = useState(new Date());
  const [item, setItem] = useState();
  const [items, setItems] = useState();
  const dateCurrent = date.toLocaleDateString().replace(/\./g, '.');
  // useEffect(()=>{
  //     getProductsDiary(dateCurrent).then(setItems)
  // },[item])
  // getProductsDiary(dateCurrent).then(setItems)

  useEffect(() => {
    getDiaryByDate(date).then(response => setItems(response.productList));
  }, [date, item]);

  console.log(items);

  return (
    <Container date={date}>
      <LeftSideBar>
        <DiaryDateСalendar onChangeDate={setDate} date={date} />
        <DiaryProduct setItem={setItem} date={dateCurrent} />
        <DiaryProductList newItem={items} date={date} />
      </LeftSideBar>
      <RightSideBar date={date} />
    </Container>
  );
}
