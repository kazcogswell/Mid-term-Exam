/**
 *   @author Cogswell. Kaz
 *   @version 0.0.1
 *   @summary Mid-term Project
 *   @todo Nothing
 */

"use strict";
const PROMPT=require('readline-sync');

let  balance, sBalance, cBalance, menuResponse, account;
let withdrawal, deposit, transferNum, transfer;
let  cardName = [], cardNum = [], pin = [];


function main() {

    setCardName();
    setCardNum();
    setPin();
    setIntBalance();
    setAccount();
    menu();
    exit()

}

main();

function setCardName() {
        cardName = ["TomSawyer" , "HuckFinn"];
        let name = PROMPT.question('What is the cardholders name?:');
        let correctName = false;
        let counter = 0;
        while (correctName === false && counter < cardName.length) {
            if (cardName[counter] === name) {
                console.log(`Welcome ${cardName[counter]}`);
                correctName = true;
                break;
            }
            counter++;
        }
        if (correctName === false) {
            console.log('Please enter the correct name.');
            return setCardName();
        }
}
function setCardNum() {
    cardNum = ["0123456789" , "9876543210"];
    let num = PROMPT.question('What is the cardholders name?:');
    let correctNum = false;
    let counter = 0;
    while (correctNum === false && counter < cardNum.length) {
        if (cardNum[counter] === num) {
            console.log(`Your card number is: ${cardNum[counter]}`);
            correctNum = true;
            break;
        }
        counter++;
    }
    if (correctNum === false) {
        console.log('Please enter the correct number.');
        return setCardNum();
    }
}


function setPin() {
        pin = ["1111" , "9999"];
        let pinNum = PROMPT.question('What is the PIN:');
        let correctPin = false;
        let counter = 0;
        while (correctPin === false && counter < pin.length) {
            if (pin[counter] === pinNum) {
                console.log(`Your PIN was correct`);
                correctPin = true;
                break;
            }
            counter++;
        }
        if (correctPin === false) {
            console.log('Please enter the correct PIN.');
            return setPin();
        }
    }


function setIntBalance() {
    sBalance = 1000;
    cBalance = 1000;
}
function setAccount() {
    if (account === 1) {
        cBalance = balance;
    } else if (account === 2) {
        sBalance = balance;
    } else {};

    account = 0;
    account = parseInt(PROMPT.question('Which account would you like to access? 1.) Checking 2.) Savings 3.) Exit:'));
    if (account === 1) {
        balance = cBalance;
        return menu();
    } else if (account === 2) {
        balance = sBalance;
        return menu();
    } else if (account === 3) {
        console.log('Have a good day.')
    } else {
        console.log('Please enter an acceptable number.');
        return setAccount();
    }
}

function menu() {
    menuResponse = 0;
    menuResponse = parseInt(PROMPT.question('What would you like to do today? 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Transfer Funds 5.) Switch Accounts 6.) Exit:'));
    if (menuResponse === 1) {
        showBalance();
    } else if (menuResponse === 2) {
        makeDeposit();
    } else if (menuResponse === 3) {
        makeWithdrawal();
    } else if (menuResponse === 4) {
        transferFunds();
    } else if (menuResponse === 5) {
        setAccount();
    } else if (menuResponse === 6) {
        exit();
    } else {
        problem();
    }
}

function showBalance() {
    console.log('Your balance is ' + balance +'.');
    return menu();
}

function makeDeposit() {
    deposit = parseInt(PROMPT.question('How much would you like to deposit?:'));
    if (isNaN(deposit) || deposit === '') {
        console.log('Please enter an acceptable number.');
        return makeDeposit();
    } else {
        balance += deposit;
        showBalance();
    }
}

function makeWithdrawal() {
    withdrawal = parseInt(PROMPT.question('How much would you like to withdrawal?:'));
    if (isNaN(withdrawal) || withdrawal === '') {
        console.log('Please enter an acceptable number.');
        return makeWithdrawal();
    } else if(balance < withdrawal) {
        console.log('That is an invalid answer. Your balance is ' + balance +'.');
        return makeWithdrawal();
    } else {
        balance -= withdrawal;
        showBalance();
    }
}

function transferFunds() {
    transferNum = parseInt(PROMPT.question('Which account would you like to transfer money from? 1.) Checking 2.) Saving:'));
    if (transferNum === 1) {
        transfer = parseInt(PROMPT.question('How much would you like to transfer to savings?:'));
        if (isNaN(transfer) || transfer === '') {
            console.log('Please enter an acceptable number.');
            return transferFunds();
        } else if (cBalance < transfer) {
            console.log('You do not have that much in your account.');
            return transferFunds();
        } else {
            balance -= transfer;
            sBalance += transfer;
            console.log('Your checking accounts balance is ' , balance , '.');
            console.log('Your savings accounts balance is ' , sBalance , '.');
        }
    } else if (transferNum === 2) {
        transfer = parseInt(PROMPT.question('How much would you like to transfer to checking?:'));
        if (isNaN(transfer) || transfer === '') {
            console.log('Please enter an acceptable number.');
            return transferFunds();
        } else if (sBalance < transfer) {
            console.log('You do not have that much in your account.');
            return transferFunds();
        } else {
            balance -= transfer;
            cBalance += transfer;
            console.log('Your checking accounts balance is ' , cBalance , '.');
            console.log('Your savings accounts balance is ' , balance , '.');
        }
    } else {
        console.log('Please enter an acceptable number.');
        return transferFunds();
    }
}

function problem() {
    console.log('Please enter an acceptable number.');
    return menu();
}

function exit() {
    console.log('Thank you, have a good day.');
}