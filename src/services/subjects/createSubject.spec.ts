import { describe, it, expect } from 'vitest';
import createSubject from "./createSubject.ts";
import { ISubjectCreationData } from '../../interfaces/ISubjectCreationData.ts';

describe('Subject creation service', () => {
    it('should call fetch with correct url and correct options', async () => {
        const token = "testToken"
        const testSubjectCreationRequest : ISubjectCreationData = {
            name: "Introdução à Programação",
            teacher: "Prof. Carlos Silva",
            syllabus: "Fundamentos de algoritmos e linguagens de programação.",
            quarter: 1,
            status: "cursando",
            days: ["Segunda-feira", "Quarta-feira"],
            deadlines: [{ name: "Prova av2", date: "12/08/2025" }, { name: "crud em python", date: "02/07/2025" }],
        };

        const response = await createSubject(testSubjectCreationRequest, token)

        expect(await response.json()).toStrictEqual({ success: true, message: "subject created with success" })
    });
});
