import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contacts/ContactUs';
import Table from './components/table/Table';
import ClientsList from './components/contacts/ClientsList';
import Store from './components/fetch/Store';
import { Comp1 } from './components/NestedRouting/Comp1';
import Comp2 from './components/NestedRouting/Comp2';
import Comp3 from './components/NestedRouting/Comp3';
import ClothHome from './components/clothStore/ClothHome';
import Cart from './components/clothStore/Cart';
import ReduxIndex from './components/redux/Index';
import Example from './components/example/Example';
import Count from './components/reusableComp/Count';
import LineBar from './components/progressBar/LineBar';
import Calculator from './components/calculator/Calculator';
import Params from './components/NestedRouting/Params';
import EmiCalculator from './components/emiCalculator/EmiCalculator';
import SpeedCalculator from './components/speedCalc/SpeedCalculator';
import Stopwatch from './components/stopwatch/Stopwatch';
import RandomColor from './components/randomColor/RandomColor';
import AgeCalculator from './components/ageCalculator/AgeCalculator';
import SimpleInterest from './components/interestCalculator/SimpleInterest';
import TextFile from './components/textFile/Textfile';
import Index from './components/pagination/Index';
import SignUp from './components/weatherApp/SignUp';
import Login from './components/weatherApp/Login';
import WeatherMain from './components/weatherApp/WeatherMain';
import Welcome from './components/weatherApp/Welcome';
import FormikEx from './components/formik/FormikEx';
import DynamicForm from './components/formik/dynamicForm/DynamicForm';
import ManualForm from './components/formik/ManualForm';
import EcommerceMain from './components/ecommerce/Index';
import TodoIndex from './components/todoApp/TodoIndex';
import CssMain from './components/css/index';
import Hooks from './components/hooks/Index';

const RoutesComp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="table" element={<Table />} />
        <Route path="clientslist" element={<ClientsList />} />
        <Route path="store" element={<Store />} />
        <Route path="comp1" element={<Comp1 />}>
          <Route path="comp2" element={<Comp2 />}>
            <Route path="comp3" element={<Comp3 />} />
          </Route>
        </Route>
        <Route path="clothhome" element={<ClothHome />}>
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="reduxexample/*" element={<ReduxIndex />} />
        <Route path="example" element={<Example />} />
        <Route path="reusable" element={<Count />} />
        <Route path="progressbar" element={<LineBar />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="params/:obj" element={<Params />} />
        <Route path="emiCalculator" element={<EmiCalculator />} />
        <Route path="speedCalculator" element={<SpeedCalculator />} />
        <Route path="stopwatch" element={<Stopwatch />} />
        <Route path="randomcolor" element={<RandomColor />} />
        <Route path="agecalculator" element={<AgeCalculator />} />
        <Route path="simpleInterest" element={<SimpleInterest />} />
        <Route path="textfile" element={<TextFile />} />
        <Route path="pagination" element={<Index />} />
        <Route path="weatherapp" element={<WeatherMain />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="welcomepage" element={<Welcome />} />
        </Route>
        <Route path="formik" element={<FormikEx />}>
          <Route path="dynamicform" element={<DynamicForm />} />
          <Route path="manualform" element={<ManualForm />} />
        </Route>
        <Route path="ecom/*" element={<EcommerceMain />}></Route>
        <Route path="todo" element={<TodoIndex />} />
        <Route path="css/*" element={<CssMain />}></Route>
        <Route path="hooks/*" element={<Hooks />} />
      </Routes>
    </div>
  );
};
export default RoutesComp;
