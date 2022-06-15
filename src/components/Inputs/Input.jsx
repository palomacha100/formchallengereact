import React from 'react';
import { Input, Label } from './styleInput';

export function Enter() {
    return (
        <div>
            {Array.of("Full Name *", "Email *", "Phone", "Password *", "Birthday *").map((label, index) => {
                return (
                    <div key={index}>
                        <Label>{label}</Label>
                        <Input />
                    </div>                   
                )
            })}
        </div>
    )
}




    