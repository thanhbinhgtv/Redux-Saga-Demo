import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_ALL_RECRUIT" })
  }, []);

  const { dataRecruit, isLoading } = useSelector(state => state.RecruitReducer)

  return (
    <div className="conatainer">
      {isLoading ? <h2> Data Is Loading </h2> : (
        dataRecruit && dataRecruit.map((item, index) => {
          return <div className="wrapper" key={index}>
            <h1> {item?.title} </h1>
            <p> {item?.description}</p>
          </div>
        })
      )}
    </div>
  );
}