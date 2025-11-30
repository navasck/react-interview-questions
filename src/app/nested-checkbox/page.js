'use client';
import { useState } from 'react';


const CheckboxesData = [
  {
    id: 1,
    label: 'Fruits',
    children: [
      { id: 2, label: 'Apple' },
      { id: 3, label: 'Banana' },
      {
        id: 4,
        label: 'Citrus',
        children: [
          { id: 5, label: 'Orange' },
          { id: 6, label: 'Lemon' },
        ],
      },
    ],
  },
  {
    id: 7,
    label: 'Vegetables',
    children: [
      { id: 8, label: 'Carrot' },
      { id: 9, label: 'Broccoli' },
    ],
  },
];

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      // if the checkbox is checked, we need to check all its children also, and add all of them to newState
      // if the checkbox is unchecked, we need to uncheck all its children also, and add all of them to newState
      const updateChildren = (node) => {
        if (node.children) {
          node.children.forEach((child) => {
            newState[child.id] = isChecked;
            updateChildren(child);
          });
        }
      };


// if all the children are checked, mark the parent as checked
const updateParents = (node, data) => {
  // Helper function to find the parent of a node
  // This function traverses the tree to find the direct parent of a given node
  const findParent = (nodeId, tree) => {
    for (const item of tree) {
      // Check if the current item is the parent of the nodeId

      // Checks if any child in `item.children` has an `id` that matches `nodeId`.
      // If true, it means `item` is the direct parent of the `nodeId` we're searching for.
      if (item.children?.some((child) => child.id === nodeId)) {
        // If `item` is found to be the parent, return that parent node.
        return item;
      }
      // : If `item` is not the direct parent, but `item` itself has children,
      // recursively call `findParent` on `item.children` to search deeper in the tree.
      // `found` will be the parent node if found in the nested children, or `null` otherwise.
      const found = item.children && findParent(nodeId, item.children);

      // If a parent was found in the recursive call (`found` is not null), return that parent node.
      if (found) return found;
    }
    return null;
  };

  // Calls `findParent` to initially find the direct parent of the `node` that was clicked.
  // It searches the entire `data` (full `CheckboxesData` tree) to find this parent.
  // The result is stored in the `parent` variable.
  let parent = findParent(node.id, data);

  // Starts a `while` loop. This loop continues as long as a `parent` node is found.
  // Its purpose is to go up the tree, updating each ancestor.
  while (parent) {
    const allChildrenChecked = parent.children.every(
      //  Calculates if ALL direct children of the `parent` node are currently checked.
      // `parent.children.every(...)`: Iterates over each direct child of the `parent`.
      // `(child) => newState[child.id]`: For each `child`, it checks if its `id` corresponds to a `true` (or truthy) value in the `newState` object.
      // This line does NOT account for the "indeterminate" state of children, it only checks if they are fully checked.
      (child) => newState[child.id]
      // This is the predicate for the `every` method. It evaluates `newState[child.id]`.
      // If `newState[child.id]` is `true`, `child` is considered checked.
      // If `newState[child.id]` is `false` or `undefined` (if not set yet), it's considered unchecked.
      // If you added an `indeterminate` state (e.g., `null`), this line would still treat `null` as `false`.
    );

    newState[parent.id] = allChildrenChecked;
    parent = findParent(parent.id, data);
  }
};

updateChildren(node);
updateParents(node, CheckboxesData);



      return newState;
    });
  };

  console.log('checked', checked);

  return (
    <div>
      {data.map((node) => (
        <div
          key={node.id}
          style={{
            paddingLeft: '20px',
          }}
        >
          <input
            type='checkbox'
            checked={checked[node.id] || false}
            onChange={(e) => handleChange(e.target.checked, node)}
          />
          <span>{node.label}</span>

          {node.children && (
            <Checkboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default function NestedCheckbox() {
  const [checked, setChecked] = useState({});

  return (
    <div className='flex flex-col px-14 py-9'>
      <h2>Nested Checkbox</h2>
      <Checkboxes
        data={CheckboxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}




// Follow-up-1 : Generate a recursively nested structure based on a given configuration.

// Follow-up-2 : if all child checkboxes are selected, the parent checkbox should automatically be checked.

// Follow-up-3 : if the parent checkbox is selected, all child checkboxes should also be selected.
      // we need to use recursion to traverse the tree structure of checkboxes.

// This problem tests your understnding of DOM manipulation, event propagation, and depth-first-search(DFS).


