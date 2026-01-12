'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { PlusCircle } from 'lucide-react';

const formSchema = z.object({
  taskText: z.string().min(1, { message: 'Task cannot be empty.' }),
});

type AddTaskFormProps = {
  onAddTask: (text: string) => void;
};

export default function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      taskText: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onAddTask(values.taskText);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-start space-x-3 mb-6">
        <FormField
          control={form.control}
          name="taskText"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormControl>
                <Input placeholder="What needs to be done?" {...field} className="text-base" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90">
          <PlusCircle className="mr-2 h-5 w-5" />
          Add Task
        </Button>
      </form>
    </Form>
  );
}
