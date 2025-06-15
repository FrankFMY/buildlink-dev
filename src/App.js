import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import ServiceForm from './components/ServiceForm';
import ServiceDetail from './components/ServiceDetail';
import Login from './components/Login';
import Register from './components/Register';
import { useAuth } from './context/AuthContext';

function App() {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [view, setView] = useState('list'); // 'list', 'create', 'detail', 'edit'
    const [showRegister, setShowRegister] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const { user, logout } = useAuth();

    const handleAddOrUpdateService = (service) => {
        if (service.id === editingService?.id) {
            setServices(
                services.map((s) => (s.id === service.id ? service : s))
            );
            setEditingService(null);
            setView('list');
        } else {
            setServices([...services, { ...service, contact: user.username }]);
            setView('list');
        }
    };

    const handleDeleteService = (id) => {
        setServices(services.filter((service) => service.id !== id));
        if (selectedService && selectedService.id === id) {
            setSelectedService(null);
            setView('list');
        }
    };

    const handleEditService = (service) => {
        setEditingService(service);
        setView('edit');
    };

    const handleServiceClick = (service) => {
        setSelectedService(service);
        setView('detail');
    };

    if (!user) {
        return showRegister ? (
            <Register onSwitchToLogin={() => setShowRegister(false)} />
        ) : (
            <Login onSwitchToRegister={() => setShowRegister(true)} />
        );
    }

    return (
        <div className='font-sans max-w-5xl mx-auto p-5 bg-gray-50 min-h-screen shadow-lg'>
            <header className='flex justify-between items-center mb-6 border-b pb-4 border-gray-200'>
                <h1 className='text-4xl font-extrabold text-blue-700'>
                    BuildLink
                </h1>
                <nav className='flex gap-4'>
                    <button
                        onClick={() => setView('list')}
                        className='px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300'
                    >
                        Все услуги
                    </button>
                    <button
                        onClick={() => {
                            setView('create');
                            setEditingService(null);
                        }}
                        className='px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300'
                    >
                        Создать услугу
                    </button>
                    <button
                        onClick={logout}
                        className='px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300'
                    >
                        Выйти ({user.username})
                    </button>
                </nav>
            </header>

            <main className='py-5'>
                {view === 'list' && (
                    <ServiceList
                        services={services}
                        onServiceClick={handleServiceClick}
                        onEditService={handleEditService}
                        onDeleteService={handleDeleteService}
                        currentUser={user}
                    />
                )}
                {view === 'create' && (
                    <ServiceForm onSaveService={handleAddOrUpdateService} />
                )}
                {view === 'edit' && (
                    <ServiceForm
                        onSaveService={handleAddOrUpdateService}
                        initialService={editingService}
                    />
                )}
                {view === 'detail' && (
                    <div className='flex flex-col items-center'>
                        <ServiceDetail service={selectedService} />
                        <button
                            onClick={() => setView('list')}
                            className='mt-6 px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300'
                        >
                            Назад к списку
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
