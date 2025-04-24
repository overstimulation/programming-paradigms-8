function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let insertIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[insertIndex - 1]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }

  return insertIndex;
}

let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log(`Wejście: [1,1,2]`);
console.log(
  `Wyjście k: ${k1}, nums (pierwsze ${k1} elementów): [${nums1
    .slice(0, k1)
    .join(", ")}]`
);

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log(`Wejście: [0,0,1,1,1,2,2,3,3,4]`);
console.log(
  `Wyjście k: ${k2}, nums (pierwsze ${k2} elementów): [${nums2
    .slice(0, k2)
    .join(", ")}]`
);

let nums3 = [];
let k3 = removeDuplicates(nums3);
console.log(`Wejście: []`);
console.log(
  `Wyjście k: ${k3}, nums (pierwsze ${k3} elementów): [${nums3
    .slice(0, k3)
    .join(", ")}]`
);

let nums4 = [5];
let k4 = removeDuplicates(nums4);
console.log(`Wejście: [5]`);
console.log(
  `Wyjście k: ${k4}, nums (pierwsze ${k4} elementów): [${nums4
    .slice(0, k4)
    .join(", ")}]`
);
