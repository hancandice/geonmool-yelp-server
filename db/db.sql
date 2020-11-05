CREATE TABLE reviews(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >= 1 and rating <= 5)
);

INSERT INTO reviews (name, review, rating) values ('한지영', '맛있었어용!', 5);

INSERT INTO reviews (restaurant_id, name, review, rating) values (18, 'mark', 'This restaurant sucked', 2);

select * from reviews where restaurant_id = 1;