"use client";

import * as React from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function BatchDialog() {
    const [open, setOpen] = useState(false);
    const isDesktop = true;

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Batch</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Batch</DialogTitle>
                    </DialogHeader>
                    <BatchForm />
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline">Add Batch</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Add Batch</DrawerTitle>
                    <DrawerDescription>
                        You can add batch here.
                    </DrawerDescription>
                </DrawerHeader>
                <BatchForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

function BatchForm({ className }) {
    // Mock data for trainers and courses
    const trainers = [
        { value: "trainer1", label: "Sir Bilal" },
        { value: "trainer2", label: "Sir Ghous" },
        { value: "trainer3", label: "Sir Shehzad" },
    ];

    const courses = [
        { value: "course1", label: "Web and App Development" },
        { value: "course2", label: "App Development" },
        { value: "course3", label: "Python Development" },
    ];

    return (
        <form className={cn("grid items-start gap-4", className)}>

            <div className="grid gap-2">
                <Label htmlFor="batch">Batch Name</Label>
                <Input
                    required
                    type="text"
                    id="batch"
                    name="title"
                    placeholder="Batch" />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select required>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                        <SelectItem value="merged">Merged</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid gap-2">
                <Label htmlFor="trainer">Trainer</Label>
                <Select required>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Trainer" />
                    </SelectTrigger>
                    <SelectContent>
                        {trainers.map((trainer) => (
                            <SelectItem key={trainer.value} value={trainer.value}>
                                {trainer.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="grid gap-2">
                <Label htmlFor="course">Course</Label>
                <Select required>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Course" />
                    </SelectTrigger>
                    <SelectContent>
                        {courses.map((course) => (
                            <SelectItem key={course.value} value={course.value}>
                                {course.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="grid gap-2">
                <Label htmlFor="noOfStudents">No of Students</Label>
                <Input
                    required
                    type="text"
                    id="noOfStudents"
                    name="noOfStudents"
                    placeholder="No of Students"
                />
            </div>

            <Button type="submit">Add Batch</Button>
        </form>
    );
}
