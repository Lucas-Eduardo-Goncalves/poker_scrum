import { useState } from "react";
import { Flex, Text } from "arkyn_components";
import type { FlexProps } from "arkyn_components/dist/types";

import { decreaseColorSaturation } from "~/client/utils";
import { roonsHistoryContainer, usersContainer, userCircle } from "../styles";

export function RoonsHistory() {
  const [roomSelected, setRoomSelected] = useState<number | null>(null);

  const roons = [
    {
      name: "Room 1",
      users: [
        { name: "user1" },
        { name: "user2" },
        { name: "user3" },
        { name: "user4" },
        { name: "user5" },
        { name: "user6" },
      ],
    },
    { name: "Room 2", users: [{ name: "user1" }, { name: "user2" }] },
    { name: "Room 3", users: [{ name: "user1" }, { name: "user2" }] },
    { name: "Room 4", users: [{ name: "user1" }, { name: "user2" }] },
    { name: "Room 5", users: [{ name: "user1" }, { name: "user2" }] },
  ];

  const roomItemCss: FlexProps = {
    align: "center",
    justify: "space-between",
    radii: "sm",
    interiorSpace: 4,
    bg: "var(--terceary-900)",
  };

  return (
    <section className={roonsHistoryContainer}>
      <Text as="strong" fontSize="md" fontWeight="bold">
        Your room history
      </Text>

      {roons.map((room, index) => (
        <Flex
          key={index + room.name}
          {...roomItemCss}
          onClick={() => setRoomSelected(index)}
          style={{
            cursor: "pointer",
            border: `2px solid ${
              roomSelected === index ? "var(--primary-500)" : "transparent"
            }`,
          }}
        >
          <Text as="h6" fontSize="lg">
            {room.name}
          </Text>

          <Flex align="center" space={2}>
            <ul className={usersContainer}>
              {room.users.map((user, index) => (
                <li
                  key={index + user.name}
                  style={{
                    right: `${index * 27}px`,
                    backgroundColor: decreaseColorSaturation(
                      "#8b5cf6",
                      index * 10
                    ),
                  }}
                  className={userCircle}
                  title={user.name}
                >
                  <Text as="p" fontSize="lg" fontWeight="bold">
                    {user.name.substring(0, 1)}
                  </Text>
                </li>
              ))}
            </ul>
          </Flex>
        </Flex>
      ))}
    </section>
  );
}
