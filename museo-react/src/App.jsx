import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import data from './museo.json';

function App() {
  const [filter, setFilter] = useState(''); // '' (home), 'museo', 'obra', 'favoritos'
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favs');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favorites));
  }, [favorites]);

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
    window.scrollTo(0, 0);
  };

  const handleHome = () => {
    setFilter('');
    window.scrollTo(0, 0);
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const filteredItems = data.filter(item => {
    if (filter === 'favoritos') return favorites.includes(item.id);
    if (filter === 'museo' || filter === 'obra') return item.tipo === filter;
    return false;
  });

  return (
    <div className="App">
      <Navbar 
        onFilter={handleFilter} 
        onHome={handleHome} 
        filter={filter} 
        favoritesCount={favorites.length} 
      />
      
      {filter === '' ? (
        <Hero onExplore={() => handleFilter('museo')} />
      ) : (
        <>
          <Gallery 
            items={filteredItems} 
            favorites={favorites} 
            onToggleFavorite={toggleFavorite} 
            onOpenModal={setSelectedItem}
            filter={filter}
          />
          <ContactForm />
        </>
      )}

      <Modal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </div>
  );
}

export default App;
