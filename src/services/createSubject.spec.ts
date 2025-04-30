import { describe, it, expect } from 'vitest';
import createSubject from "./createSubject.ts";
import {subjectCreationRequest} from "../types/subjectCreation.ts";

describe('Subject creation service', () => {
    it('should call fetch with correct url and correct options', async () => {
        const testSubjectCreationRequest : subjectCreationRequest = {
            name: "Introdução à Programação",
            teacher: "Prof. Carlos Silva",
            syllabus: "Fundamentos de algoritmos e linguagens de programação.",
            semester: 1,
            status: "cursando",
            schedule: ["Segunda 08:00-10:00", "Quarta 08:00-10:00"],
            examsAndTasks: [new Date("2025-06-15T10:00:00"), new Date("2025-06-30T14:00:00")],
        };

        const response = await createSubject(testSubjectCreationRequest)

        expect(await response.json()).toStrictEqual({ success: true, message: "subject created with success" })
    });
});
