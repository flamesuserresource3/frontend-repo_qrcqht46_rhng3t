import React from 'react';

export default function PreviewCard({ data }) {
  if (!data) return null;
  const { name, email, phone, topic, message } = data;
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Pratinjau</h3>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-gray-500">Nama</dt>
          <dd className="font-medium text-gray-900">{name || '-'}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Email</dt>
          <dd className="font-medium text-gray-900">{email || '-'}</dd>
        </div>
        <div>
          <dt className="text-gray-500">WhatsApp</dt>
          <dd className="font-medium text-gray-900">{phone || '-'}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Topik</dt>
          <dd className="font-medium text-gray-900">{topic || '-'}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-gray-500">Pesan</dt>
          <dd className="font-medium text-gray-900 whitespace-pre-wrap">{message || '-'}</dd>
        </div>
      </dl>
    </div>
  );
}
