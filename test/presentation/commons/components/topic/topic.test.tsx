import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Topic from '../../../../../src/presentation/commons/components/topic/topic';

describe("components test", () => {
    test("topic render", async () => {
        render(
            <Topic></Topic>
        );

        const linkElement = screen.getByText(/aaaa/i);
        expect(linkElement).toBeInTheDocument();
    });
});