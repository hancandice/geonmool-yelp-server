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

-- =========== Postgres Aggregate Functions ===========

select count (*) from reviews;

select trunc(AVG(rating), 3) AS average_review from reviews;

select name as username, rating as restaurant_rating from reviews;

select AVG(rating) from reviews where restaurant_id = 1;

select trunc(AVG(rating), 2) AS average_review from reviews where restaurant_id=3;

select count(rating) from reviews where restaurant_id = 1;

select location, count(location) from restaurants group by location;

select restaurant_id, count(restaurant_id) from reviews group by restaurant_id;

