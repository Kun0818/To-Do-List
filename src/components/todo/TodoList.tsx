'use client';

import type { Task } from '@/app/types';
import TodoItem from '@/components/todo/TodoItem';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

type TodoListProps = {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
  isLoading: boolean;
};

export default function TodoList({
  tasks,
  onToggleComplete,
  onDeleteTask,
  isLoading,
}: TodoListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4 pt-4">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-full" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-[80%]" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-[90%]" />
        </div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center text-muted-foreground pt-8 pb-4">
        <p className="text-lg">You have no tasks yet.</p>
        <p>Add a task above to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 pt-4">
      <Separator />
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}
