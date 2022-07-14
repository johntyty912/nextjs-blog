import { useEffect, useState } from 'react';
import useSWR from 'swr';
import useAuth from './useAuth';

const fetcher = (url, data, method, token) => 
    fetch(url, {
        body: data ? JSON.stringify(data) : undefined,
        method: method,
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : undefined
        }
    }).then(res => res.json())

export default function useApi() {
    const { token, login } = useAuth();
    
    function useLogin(body) {
        const url = `${process.env.NEXT_PUBLIC_AUTH_URL}/login`;
        const method = 'POST';
        const { data, mutate, error } = useSWR([url, body, method], fetcher);

        const loading = !data && !error;

        if (data) {
            login(data.jwt);
        }

        return {
            user: data,
            mutate,
            loading,
        };
    }

    function useAAA() {
        return token;
    }

    return { useLogin, useAAA };
}