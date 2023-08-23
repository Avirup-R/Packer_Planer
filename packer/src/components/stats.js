export default function Stats({ onNoOfItems, percentage, noOfItemsPacked }) {
  if (!onNoOfItems) {
    return (
      <p className="stats">
        <em>Start adding items to your packing list</em>
      </p>
    );
  }

  return (
    <footer className="stats">
      <em>
        {percentage === 1
          ? "You have packed everything"
          : `You have ${onNoOfItems} items in your list. You have already packed 
        ${noOfItemsPacked} (${percentage * 100}%)`}
      </em>
    </footer>
  );
}
