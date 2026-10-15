import Dexie from 'dexie';
import { modules } from '../data/modules';

export const db = new Dexie('JelajahBumiGeografiX');
db.version(1).stores({
  modules: 'id, number, category, title',
  progress: 'moduleId, completed, completedAt',
  notes: '++id, moduleId, updatedAt',
  quizAttempts: '++id, moduleId, score, total, createdAt',
});
db.version(2).stores({
  modules: 'id, number, category, title',
  progress: 'moduleId, completed, completedAt',
  notes: '++id, moduleId, updatedAt',
  quizAttempts: '++id, moduleId, score, total, createdAt',
  studentProfile: 'id',
});

db.on('populate', async () => {
  await db.modules.bulkPut(modules);
});

export async function ensureModuleSeed() {
  if ((await db.modules.count()) === 0) await db.modules.bulkPut(modules);
}

export async function ensureStudentProfile() {
  if (!(await db.studentProfile.get('current'))) {
    await db.studentProfile.add({ id: 'current', studentName: '', className: 'X', semester: 'Ganjil' });
  }
}

export async function saveStudentProfile(profile) {
  await db.studentProfile.put({ ...profile, id: 'current', updatedAt: new Date().toISOString() });
}

export async function markModuleComplete(moduleId) {
  await db.progress.put({ moduleId, completed: true, completedAt: new Date().toISOString() });
}

export async function saveModuleNote(moduleId, content) {
  const current = await db.notes.where('moduleId').equals(moduleId).first();
  const entry = { moduleId, content, updatedAt: new Date().toISOString() };
  if (current) await db.notes.update(current.id, entry);
  else await db.notes.add(entry);
}
