import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '' });

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then(res => res.json())
      .then(setTasks)
      .catch(console.error);
  }, []);

  const submitTask = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
    setForm({ title: '', description: '' });
  };

  return (
    <div>
      <Head>
        <title>Task Management</title>
      </Head>
      <h1>Tasks</h1>
      <nav>
        <Link href="/">Home</Link>
      </nav>

      <form onSubmit={submitTask} style={{ marginTop: '1rem' }}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <strong>{task.title}</strong> - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
