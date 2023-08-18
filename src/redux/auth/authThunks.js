import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginDB, registerDB } from "../../api/auth";


export const registerThunk = createAsyncThunk('auth/register', body => {
	return registerDB(body)
})

export const loginThunk = createAsyncThunk('auth/login', body => {
	loginDB(body)
})
