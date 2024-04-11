import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import TopNav from "./TopNav";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";

function today() {
    return new Date().toLocaleDateString([], {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
    }).replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, "$3$1$2");
}

function namespace() {
    return 'bd-income-tax-calculator';
}

function App() {

    const [values, setValues] = useState({
        lowerBound: 300000,
        minimumTax: 5000,
        companies: [],
        lifetimeVisitor: 0,
        dailyVisitor: 0
    });
