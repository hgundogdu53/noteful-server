INSERT INTO noteful_folders
    (name)
VALUES
    ('Folder 1'),
    ('Folder 2'),
    ('Folder 3');

INSERT INTO noteful_notes
    (name, folderId, content)
VALUES
    ('Dogs', 1, 'This is a note about dogs.'),
    ('Cats', 1, 'This is a note about cats.'),
    ('More Dogs', 2, 'We have enough dogs as is right now.'),
    ('Armadillos', 3, 'You can''t have a pet Armadillo!'),
    ('Sasquatch', 3, 'Sasquatch is not real, so you cannot have one!'),
    ('Fish', 2, 'The last time we had fish, they died because we forgot to feed them. So, no fish.'),
    ('Rock', 1, 'Why do you want a pet rock? Okay, go ahead.');